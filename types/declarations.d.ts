declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module 'next/image'
declare module 'next/link'
declare module 'next/document'
declare module 'lucide-react'
declare module '*.png'
declare module '*.svg'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

// Add Locomotive Scroll type declaration
declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el: HTMLElement;
    name?: string;
    offset?: [number, number];
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: string;
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    tablet?: {
      smooth?: boolean;
      breakpoint?: number;
      direction?: string;
    };
    smartphone?: {
      smooth?: boolean;
      breakpoint?: number;
      direction?: string;
    };
    reloadOnContextChange?: boolean;
    lerp?: number;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(target: string | number | HTMLElement, options?: object): void;
    on(event: string, func: Function): void;
    off(event: string, func: Function): void;
  }
} 