const LinkedList = (() => {
    return {
        head: null,
        tail: null,
        length: 0,
        append(value) {
            const newNode = Node(value)
            if (!this.head) {
                this.head = newNode
                this.tail = newNode
            } else {
                this.tail.next = newNode
                this.tail = newNode
            }
            this.length++
        },
        size() {
            return console.log(this.length)    
        },
        removeAt(index = 0) {
            if (index <= 0) {
                this.head = this.head.next
            } else {
                let currentNode = this.head
                for (let i=0; i < index -1 ; i++) {
                    currentNode = currentNode.next
                }
                currentNode.next = currentNode.next.next
            }
        },
        insertAt(value, index = 0) {
            if (index > this.length) this.append(value)
            else if (index <= 0) this.head.value = value
            else {
                let currentNode = this.head
                for (let i=0; i <= index; i++) {
                    currentNode = currentNode.next
                }
                currentNode.value = value
                
            }             
        },
        contains(value) {
            let currentNode = this.head
            while (currentNode) {
                if (currentNode.value === value) {
                    console.log("true")
                    break
                }
                currentNode = currentNode.next
                if (!currentNode) console.log("false")
            }
        },
        prepend(value) {
            const newNode = Node(value)
            if (!this.head) {
                this.head = newNode
                this.tail = newNode
            } else {
                newNode.next = this.head
                this.head = newNode
            }
            this.length++
        },
        print() {
            let currentNode = this.head
            let nodeArray = []
            while (currentNode) {
                nodeArray = [...nodeArray, currentNode]
                currentNode = currentNode.next
            }
            let listString = ''
            nodeArray.map(node => {
                if (node.next) {
                    listString += `${node.value} -> `    
                } else {
                    listString += `${node.value} -> null`    
                }
            })
            return console.log(listString)
        }
                
    }    
})()

function Node(value) {
    return {value}
}

LinkedList.append(1)
LinkedList.append(2)
LinkedList.append(3)
LinkedList.prepend(4)
LinkedList.insertAt(8,1)
LinkedList.print()
