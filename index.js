var EmptyList = (function () {
    function EmptyList() {
    }
    EmptyList.prototype.cons = function (el) {
        return ListNode.of(el);
    };
    return EmptyList;
}());
var ListNode = (function () {
    function ListNode(_head, _tail) {
        this._head = _head;
        this._tail = _tail;
    }
    ListNode.prototype.cons = function (el) {
        return ListNode.of(el, this);
    };
    ListNode.empty = function () {
        return new EmptyList();
    };
    ListNode.of = function (, M) {
        if ( === void 0) {  = el; }
        return new ListNode(el, new EmptyList());
    };
    return ListNode;
}());
//# sourceMappingURL=index.js.map