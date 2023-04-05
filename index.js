class Node {
    constructor(value = null, pointer = null) {
        this.value = value
        this.next = pointer
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        const newNode = new Node(value)

        if (this.head == null) {
            this.head = newNode
            return this
        }

        let tail = this.head

        while(tail.next !== null) {
            tail = tail.next
        }
        tail.next = newNode
        return this
    }

    prepend(value) {
        const newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode
    }

    size() {
        let size = 0
        let position = this.head

        while (position !== null) {
            size++
            position = position.next
        }

        return size
    }

    headNode() {
        return this.head
    }

    tailNode() {
        let tail = this.head

        while (tail.next !== null) {
            tail = tail.next
        }

        return tail
    }

    at(index) {
        const size = this.size()
        let count = 0
        let position = this.head
        
        if (index > size) {
            throw new Error('Index too high')
        }

        while (count !== index) {
            position = position.next
            count++
        }

        return position
    }

    pop() {
        if (this.head == null) {
            throw new Error('Nothing to pop')
        }

        const size = this.size()
        const preNode = this.at(size - 2)

        preNode.next = null
    }

    contains(value) {
        let position = this.head

        if (this.head == null) {
            return false
        }

        while (position.next !== undefined) {
            if (position.value == value) {
                return true
            }
            position = position.next
            if (position.next == undefined) {
                return false
            }
        }

        return false
        
    }

    find(value) {
        if (this.head == null) {
            throw new Error('Damn')
        }

        let position = this.head
        let index = 0

        while (position != null) {
            if (position.value == value) {
                return index
            }
            position = position.next
            index++
        }

        throw new Error('no')
    }

    toString() {
        let string = ''
        let position = this.head

        if (this.head == null) {
            return 'null'
        }

        while (position != null) {
            string += `( ${position.value} ) -> `
            position = position.next
        }

        string += ' null'

        return string
    }

    insertAt(value, index) {
        const newNode = new Node(value)
        const size = this.size()
        let count = 0
        let position = this.head

        if (index > size || this.head == null) {
            throw new Error('list is not enough long')
        }

        while (position != null) {
            if (count == (index - 1)) {
                const nextNode = position.next
                position.next = newNode
                position.next.next = nextNode
                return this
            }
            count++
            position = position.next
        }
    }

    removeAt(index) {
        const size = this.size()
        let count = 0
        let position = this.head

        if (index > size || this.head == null) {
            throw new Error('list is not enough long')
        }

        while (position != null) {
            if (count == (index - 1)) {
                position.next = position.next.next
                return this
            }
            count++
            position = position.next
        }
    }
}











const list = new LinkedList()

list.append('yo')
list.append('yoyo')
list.prepend('maman')
list.pop()
list.append('ouai')
list.insertAt('caca', 1)
list.removeAt(3)

console.log(list.toString())