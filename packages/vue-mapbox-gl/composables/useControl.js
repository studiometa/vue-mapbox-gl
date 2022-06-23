import { onMounted, onUnmounted, ref, unref, watch } from 'vue';
import { useMap } from './useMap.js';
import { useEventsBinding } from './useEventsBinding.js';
import { usePropsBinding } from './usePropsBinding.js';

/**
 * Use a Mapbox control.
 * @template {any} T
 * @param   {T}        ControlConstructor  A Mapbox control constructor function.
 * @param   {Object}   options
 * @param   {any}      options.propsConfig Props configuration for the component.
 * @param   {an}       options.props       Resolved props of the component.
 * @param   {Function} options.emit        Emit function of the component.
 * @param   {string[]} options.events      List of events for the Mapbox control.
 * @returns {{ control: Ref<InstanceType<T>>, map: Ref<any> }}
 */
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
