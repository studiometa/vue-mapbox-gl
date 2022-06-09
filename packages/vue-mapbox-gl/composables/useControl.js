import { onMounted, onUnmounted, ref, unref, watch } from 'vue';
import { useMap } from './useMap.js'
import { useEventsBinding } from './useEventsBinding.js'
import { usePropsBinding } from './usePropsBinding.js'


export function useControl(ControlConstructor, { propsConfig, props, emit, events = [] }) {
  const { map } = useMap();
  const control = ref();

  if (Array.isArray(events) && events.length) {
    useEventsBinding(emit, control, events);
  }

  if (typeof propsConfig !== 'undefined') {
    usePropsBinding(props, control, propsConfig);
  }

  watch(
    () => props.position,
    (newValue) => {
      if (unref(map)) {
        unref(map).removeControl(unref(control)).addControl(unref(control), newValue);
      }
    }
  );

  onMounted(() => {
    control.value = new ControlConstructor(props);

    if (unref(map)) {
      unref(map).addControl(unref(control), props.position);
    }
  });

  onUnmounted(() => {
    if (unref(control) && unref(map)) {
      unref(map).removeControl(unref(control));
    }
  });

  return {
    control,
    map,
  };
}
