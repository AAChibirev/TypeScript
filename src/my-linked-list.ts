import { ListNode } from "./list-node.js";

export class MyLinkedList<T> {
    private size: number;
    private begin: ListNode<T> | undefined;
    private end: ListNode<T> | undefined;

    constructor() {
        this.size = 0;
    }

    addToBeginOrEndOfList(data: T): boolean {
        const newNode = new ListNode(data);
        if (this.size === 0) {
            this.begin = newNode;
            this.end = newNode;
        } else {
            if (typeof this.end !== "undefined") {
                this.end.nextNode = newNode;
                this.end = newNode;
            } else {
                return false;
            }
        }
        this.size++;
        return true;
    }

    addElement(data: T, index: number): boolean {

        if (index > this.size || index < 0 || isNaN(index)) {
            return false;
        }

        if (index === this.size) {
            return this.addToBeginOrEndOfList(data);
        }

        if (index === 0) {
            this.begin = new ListNode<T>(data, this.begin);
        } else {
                let tmpNode = this.begin;
                for (let i = 0; i < index; i++) {
                    tmpNode = tmpNode?.nextNode;
                }
                const newNode = new ListNode(data, tmpNode?.nextNode);
                if (typeof tmpNode !== "undefined") {
                    tmpNode.nextNode = newNode;
                } else {
                    return false;
                }
            }
        this.size++;
        return true;
        }

    removeElement(index: number): boolean {
        if (index >= this.size || index < 0 || isNaN(index)) {
            return false;
        }

        if (index === 0) {
            this.begin = this.begin?.nextNode;
        } else {
            let tmpNode = this.begin;
            for (let i = 0; i < index - 1; i++) {
                tmpNode = tmpNode?.nextNode;
            }
            if (index === this.size - 1) {
                this.end = tmpNode;
                if (typeof this.end !== "undefined") {
                    this.end.nextNode = tmpNode;
                }
            } else {
                if (typeof tmpNode !== "undefined") {
                    tmpNode.nextNode = tmpNode?.nextNode?.nextNode;
                }
            }
        }
        this.size--;
        return true;

    }

    printElement(index: number): boolean {
        const element = this.getElement(index);
        if (typeof element === "undefined") {
            return false;
        }
        console.log(element?.data);
        return true;
    }

    printAllElements(): boolean {
        let tmpNode = this.begin;
        let errFlag = false;
        for (let i = 0; i < this.size; i++) {
            if (typeof tmpNode === "undefined") {
                errFlag = true;
                break;
            }
            console.log(tmpNode.data);
            tmpNode = tmpNode?.nextNode;
        }

        if (errFlag === false) {
            return true;
        }
        return false;
    }

    getElement(index: number): ListNode<T> | undefined {
        if (index >= this.size || index < 0 || isNaN(index)) {
            return undefined;
        }

        if (index === 0) {
            return this.begin;
        }

        if (index === this.size) {
            return this.end;
        }

        let tmpNode = this.begin;
        for (let i = 0; i < index; i++) {
            tmpNode = tmpNode?.nextNode;
        }
        return tmpNode;
    }

}
