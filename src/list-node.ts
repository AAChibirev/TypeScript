export class ListNode<T> {
    private _data: T;
    private _nextNode: ListNode<T> | undefined;

    constructor(nodeData: T, next?: ListNode<T>) {
        this._data = nodeData;
        this._nextNode = next;
    }

    get data(): T {
        return this._data;
    }

    set data(value: T) {
        this._data = value;
    }

    get nextNode(): ListNode<T> | undefined {
        return this._nextNode;
    }

    set nextNode(value: ListNode<T> | undefined) {
        this._nextNode = value;
    }
}
