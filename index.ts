import {computed, type Ref} from '@vue/reactivity';

export function add(a: number, b: number): number {
    return a + b;
}

export function addRef(a: Ref<number>, b: Ref<number>): Ref<number> {
    return computed(() => a.value + b.value)
}

console.log('Add 2 + 3 =', add(2, 3));

