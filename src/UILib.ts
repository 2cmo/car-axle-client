export interface Component {
    parent: HTMLElement;
    render(): void;
}

interface ElementAttributes {
    id?: string
    className?: string
    innerHTML?: string;
    type?: string;
    name?: string;
    value?: string;
}

export function createElement(tagName: string, parent: Element, options?: ElementAttributes ): HTMLElement {
    const element: HTMLElement = document.createElement(tagName)

    if (options) {
        if (options.id) {
            element.id = options.id
        }
        if (options.className) {
            element.className = options.className
        }
        if (options.innerHTML) {
            element.innerHTML = options.innerHTML
        }
        if (options.type) {
            element.setAttribute('type', options.type)
        }
        if (options.name) {
            element.setAttribute('name', options.name)
        }
        if (options.value) {
            element.setAttribute('value', options.value)
        }
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;
}