// 定义小根堆
class MinHeap {
    // 定义构造函数，初始化堆
    // 因为用数组实现，所以传入一个初始化数组
    // 定义一个比较函数cmp，用来比较两个元素是否需要交换
    constructor(arr = [], cmp = (a, b) => a < b) {
        this.arr = arr
        this.cmp = cmp
        this.heapify()
    }
    // 因为我们传入的是一个数组，需要初始化让他成为一个堆
    heapify() {
        // 如果元素个数小于等于1，表示不用排序
        if(this.size() <= 1) return
        // 否则从第二个元素开始比较
        // for(let i = this.size()-1; i >= 1; i--) {
        for(let i = 1; i < this.size(); i++) {
            // 向上调整
            this.bubbleUp(i)
        }
    }

    // 定义堆的长度
    size() {
        return this.arr.length
    }
    //返回堆顶元素，即数字的第一位
    top() {
        //如果堆顶为空，返回null
        if(!this.size()) return null
        // 否则返回栈顶元素，即数组的第一个元素
        return this.arr[0]
    }
    // 插入堆
    push(val) {
        // 在堆尾添加元素
        this.arr.push(val)
        // 插入之后需要向上调整，保证最小的元素在堆顶
        // 定义向上调整的函数，传入堆尾元素的下标
        this.bubbleUp(this.size() - 1)
    }
    // 定义弹出函数(将堆顶元素弹出)
    pop() {
        // 先判断堆中是否有函数
        if(!this.size) return null
        // 如果堆中的元素只有一个，则直接将它弹出
        if(this.size() === 1) return this.arr.pop()
        // 如果堆中元素大于1
        // 记录堆顶元素的值
        const top = this.arr[0]
        // 将堆顶元素和堆尾元素进行交换，让堆顶元素的值等于堆尾元素，并弹出堆尾元素
        this.arr[0] = this.arr.pop()
        // 向下调整，保证堆顶的元素值是最小的，携带堆顶元素的下标0
        this.bubbleDown(0)
        // 最后返回堆顶元素
        return top
    }
    // 定义向上调整函数（尾部插入后执行）
    bubbleUp(index) {
        // 如果index等于0，则表示已经在堆顶了，不需要调整
        // 如果index不等于0
        while(index) {
            // 记录当前元素的父元素的下标，方便后面交换
            const parentIndex = Math.floor((index - 1) / 2)
            // 如果当前元素的值比父元素小，则交换当前元素与父元素的值
            if(this.cmp(this.arr[index], this.arr[parentIndex])) {
                // 使用ES6结构赋值语句进行交换
                [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]]
                // 交换之后，使父节点成为当前节点
                index = parentIndex
            } else {
                // 否则，说明这个元素已经在它该在的位置了，就不用进行交换了，直接跳出循环
                break
            }
        }
    }
    // 定义向下调整函数（头部删除后执行）
    bubbleDown(index) {
        // 记录堆尾元素的下标
        const lastIndex = this.size() - 1
        // 只要当前元素的索引小于最后一个元素的索引，就向下调整
        while(index < lastIndex) {
            // 记录当前元素的下标，方便之后交换
            let findIndex = index
            // 找到他的左右孩子的索引
            let leftIndex = index * 2 + 1
            let rightIndex = index * 2 + 2
            // 当前节点先与左孩子比较，如果下标还没到末尾，且左孩子的值小于当前元素值（满足交换条件）就交换
            // 这两个if操作其实就是在判断左右孩子哪个的值小，因为当前节点是要跟值小的那个孩子节点交换值
            if(leftIndex <= lastIndex && this.cmp(this.arr[leftIndex], this.arr[findIndex])) {
                findIndex = leftIndex
            }
            if(rightIndex <= lastIndex && this.cmp(this.arr[rightIndex], this.arr[findIndex])) {
                findIndex = rightIndex
            }
            // 如果找到的孩子节点的下标大于当前节点的下标，就进行交换
            if(findIndex > index) {
                // 交换
                [this.arr[findIndex], this.arr[index]] = [this.arr[index], this.arr[findIndex]]
                // 交换之后，使这个孩子节点成为当前节点
                index = findIndex
            } else {
                // 否则，说明这个元素已经在它该在的位置了，直接跳出循环
                break
            }
        }
    }
}



var getLeastNumbers = function(arr, k) {
    // 用arr数组实例化一个堆
    const heap = new MinHeap(arr)
    // 定义res作为返回的数组
    let res = []
    // 把堆顶的元素弹出k次并将弹出的元素（每次弹出的元素都为堆中的最小元素）存储在res中
    for(let i=0; i < k; i++) {
        res.push(heap.pop())
    }
    // 最后返回结果
    return res
};

console.log(getLeastNumbers([4,5,1,6,2,7,3,8],4))