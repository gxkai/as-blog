import { isFunction } from '@as1024/utils'
import ResizeObserver from 'resize-observer-polyfill'
import type { Ref } from 'vue'

export const useResizeObserver = ({
  elementRef,
  onResize,
}: {
  elementRef: Ref<HTMLElement | undefined>
  onResize: (entry?: ResizeObserverEntry) => void
}) => {
  let resizeObserver: ResizeObserver | null

  const createResizeObserver = () => {
    if (!elementRef.value) return
    resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      const entry = entries[0]
      isFunction(onResize) && onResize(entry)
    })
    resizeObserver.observe(elementRef.value)
  }

  const destroyResizeObserver = () => {
    if (resizeObserver) {
      resizeObserver.disconnect()
      resizeObserver = null
    }
  }

  return {
    createResizeObserver,
    destroyResizeObserver,
  }
}
