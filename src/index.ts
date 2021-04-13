import * as readlineSync from "readline-sync";
import { MyLinkedList } from "./my-linked-list.js";

let myList: MyLinkedList<unknown>;
let listType: string | number | boolean;

console.log("Input the command and press ENTER:\n" +
    "create (listType) (create list of type listType,e.g. create number)\n" +
    "help\nexit");
readlineSync.promptCLLoop({
    create: function(targetType: string): boolean {
        switch (targetType) {
            case "string":
                myList = new MyLinkedList<string>();
                console.log("Successful creating");
                listType = "s";
                doNextStep();
                break;
            case "number":
                myList = new MyLinkedList<number>();
                console.log("Successful creating");
                listType = 10;
                doNextStep();
                break;
            case "boolean":
                myList = new MyLinkedList<boolean>();
                console.log("Successful creating");
                listType = true;
                doNextStep();
                break;
            case "any":
                myList = new MyLinkedList();
                console.log("Successful creating");
                doNextStep();
                break;
            default:
                console.log("Wrong type of list or letter case! Try again or use Help.");
                return false;
        }
        console.log("Bye");
        return true;
    },
    help: function(): void {
        console.log("Input the command and press ENTER:\n" +
            "create (listType) (e.g.: create number/string/boolean)\n" +
            "exit");
    },
    exit: function(): boolean {
        console.log("Bye");
        return true;
    },
});

function doNextStep(): boolean {
    console.log("Input the command and press ENTER:\n" +
        "add (add element by index, e.g: add 12 1)\nremove (remove element by index, e.g: remove 1)\n" +
        "print (print element by index, e.g: print 2)\nprintAll (print all elements)\nexit");
    readlineSync.promptCLLoop({
        add: function(data: string, index: string): void {
            const convertedData = convertDataFromUser(data, listType);
            if (typeof convertedData !== "undefined") {
                if (myList.addElement(convertedData, Number(index))) {
                    console.log("Adding successfully");
                } else {
                    console.log("Something goes wrong. Check parameters or use Help");
                }
            } else {
                console.log("Wrong type of data. Check parameters or use Help");
            }

        },
        remove: function(index: string): void {
            if (myList.removeElement(Number(index))) {
                console.log("Removing successfully");
            } else {
                console.log("Something goes wrong. Check index or use Help");
            }
        },
        print: function (index: string): void {
            if (!myList.printElement(Number(index))) {
                console.log("Something goes wrong. Check index or use Help");
            }
        },
        printAll: function(): void {
            if (!myList.printAllElements()) {
                console.log("Something goes wrong. Check index or use Help");
            }
        },
        help: function(): void {
            console.log("Input the command and press ENTER:\n" +
                "add (e.g: add 12 1)\nremove (e.g: remove 1)\n" +
                "print (e.g: print 2)\nprintAll (print all elements)\nexit");
        },
        exit: function(): boolean {
            return true;
        }
    });
    return true;

}

function convertDataFromUser(data: string, dataType: string | number | boolean): unknown {

    switch (typeof dataType) {
        case "number":
            if (isNaN(Number(data))) {
                return undefined;
            }
            return Number(data);
        case "string":
            return data;
        case "boolean":
            if (data === "true") {
                return true;
            }
            if (data === "false") {
                return false;
            }
            break;
        case "undefined":
            return data;
    }

}
