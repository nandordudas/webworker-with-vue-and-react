// Generated by 'unplugin-auto-import'
export {}
declare global {
  const $$: typeof import('vue/macros')['$$']
  const $: typeof import('vue/macros')['$']
  const $computed: typeof import('vue/macros')['$computed']
  const $customRef: typeof import('vue/macros')['$customRef']
  const $ref: typeof import('vue/macros')['$ref']
  const $shallowRef: typeof import('vue/macros')['$shallowRef']
  const $toRef: typeof import('vue/macros')['$toRef']
  const EffectScope: typeof import('vue')['EffectScope']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const createRef: typeof import('react')['createRef']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const effectScope: typeof import('vue')['effectScope']
  const forwardRef: typeof import('react')['forwardRef']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const lazy: typeof import('react')['lazy']
  const markRaw: typeof import('vue')['markRaw']
  const memo: typeof import('react')['memo']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const startTransition: typeof import('react')['startTransition']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCallback: typeof import('react')['useCallback']
  const useContext: typeof import('react')['useContext']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useDebugValue: typeof import('react')['useDebugValue']
  const useDeferredValue: typeof import('react')['useDeferredValue']
  const useEffect: typeof import('react')['useEffect']
  const useId: typeof import('react')['useId']
  const useImperativeHandle: typeof import('react')['useImperativeHandle']
  const useInsertionEffect: typeof import('react')['useInsertionEffect']
  const useLayoutEffect: typeof import('react')['useLayoutEffect']
  const useMemo: typeof import('react')['useMemo']
  const useReducer: typeof import('react')['useReducer']
  const useRef: typeof import('react')['useRef']
  const useSlots: typeof import('vue')['useSlots']
  const useState: typeof import('react')['useState']
  const useSyncExternalStore: typeof import('react')['useSyncExternalStore']
  const useTransition: typeof import('react')['useTransition']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly $$: UnwrapRef<typeof import('vue/macros')['$$']>
    readonly $: UnwrapRef<typeof import('vue/macros')['$']>
    readonly $computed: UnwrapRef<typeof import('vue/macros')['$computed']>
    readonly $customRef: UnwrapRef<typeof import('vue/macros')['$customRef']>
    readonly $ref: UnwrapRef<typeof import('vue/macros')['$ref']>
    readonly $shallowRef: UnwrapRef<typeof import('vue/macros')['$shallowRef']>
    readonly $toRef: UnwrapRef<typeof import('vue/macros')['$toRef']>
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly createRef: UnwrapRef<typeof import('react')['createRef']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly forwardRef: UnwrapRef<typeof import('react')['forwardRef']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly lazy: UnwrapRef<typeof import('react')['lazy']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly memo: UnwrapRef<typeof import('react')['memo']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly startTransition: UnwrapRef<typeof import('react')['startTransition']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useCallback: UnwrapRef<typeof import('react')['useCallback']>
    readonly useContext: UnwrapRef<typeof import('react')['useContext']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useDebugValue: UnwrapRef<typeof import('react')['useDebugValue']>
    readonly useDeferredValue: UnwrapRef<typeof import('react')['useDeferredValue']>
    readonly useEffect: UnwrapRef<typeof import('react')['useEffect']>
    readonly useId: UnwrapRef<typeof import('react')['useId']>
    readonly useImperativeHandle: UnwrapRef<typeof import('react')['useImperativeHandle']>
    readonly useInsertionEffect: UnwrapRef<typeof import('react')['useInsertionEffect']>
    readonly useLayoutEffect: UnwrapRef<typeof import('react')['useLayoutEffect']>
    readonly useMemo: UnwrapRef<typeof import('react')['useMemo']>
    readonly useReducer: UnwrapRef<typeof import('react')['useReducer']>
    readonly useRef: UnwrapRef<typeof import('react')['useRef']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useState: UnwrapRef<typeof import('react')['useState']>
    readonly useSyncExternalStore: UnwrapRef<typeof import('react')['useSyncExternalStore']>
    readonly useTransition: UnwrapRef<typeof import('react')['useTransition']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}