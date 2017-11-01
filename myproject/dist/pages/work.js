'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Work = function (_wepy$page) {
  _inherits(Work, _wepy$page);

  function Work() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Work);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Work.__proto__ || Object.getPrototypeOf(Work)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '作品一览'
    }, _this.data = {
      src: '',
      animal: 'http://mpic.tiankong.com/31e/a1b/31ea1bf808b4e1114d6da1b71b391831/640.jpg',
      head: 'http://img0.imgtn.bdimg.com/it/u=814104885,3650636077&fm=27&gp=0.jpg',
      white: 'white',
      gray: 'gray',
      grey: 'grey',
      whiteone: 'white',
      black: 'black',
      dark: 'black'
    }, _this.methods = {
      total: function total() {
        var self = this;
        self.white = 'white';
        self.gray = 'gray';
        self.grey = 'grey';
        self.whiteone = 'white';
        self.black = 'black';
        self.dark = 'black';
      },
      popular: function popular() {
        var self = this;
        self.white = 'gray';
        self.gray = 'white';
        self.grey = 'grey';
        self.whiteone = 'black';
        self.black = 'white';
        self.dark = 'black';
      },
      today: function today() {
        var self = this;
        self.white = 'grey';
        self.gray = 'gray';
        self.grey = 'white';
        self.black = 'black';
        self.whiteone = 'black';
        self.dark = 'white';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Work, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Work;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Work , 'pages/work'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuanMiXSwibmFtZXMiOlsiV29yayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiYW5pbWFsIiwiaGVhZCIsIndoaXRlIiwiZ3JheSIsImdyZXkiLCJ3aGl0ZW9uZSIsImJsYWNrIiwiZGFyayIsIm1ldGhvZHMiLCJ0b3RhbCIsInNlbGYiLCJwb3B1bGFyIiwidG9kYXkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsMkVBRkg7QUFHTEMsWUFBTSxzRUFIRDtBQUlMQyxhQUFPLE9BSkY7QUFLTEMsWUFBTSxNQUxEO0FBTUxDLFlBQU0sTUFORDtBQU9MQyxnQkFBVSxPQVBMO0FBUUxDLGFBQU8sT0FSRjtBQVNMQyxZQUFNO0FBVEQsSyxRQVdQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLUixLQUFMLEdBQWEsT0FBYjtBQUNBUSxhQUFLUCxJQUFMLEdBQVksTUFBWjtBQUNBTyxhQUFLTixJQUFMLEdBQVksTUFBWjtBQUNBTSxhQUFLTCxRQUFMLEdBQWdCLE9BQWhCO0FBQ0FLLGFBQUtKLEtBQUwsR0FBYSxPQUFiO0FBQ0FJLGFBQUtILElBQUwsR0FBWSxPQUFaO0FBQ0QsT0FUTztBQVVSSSxhQVZRLHFCQVVFO0FBQ1IsWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLEtBQUwsR0FBYSxNQUFiO0FBQ0FRLGFBQUtQLElBQUwsR0FBWSxPQUFaO0FBQ0FPLGFBQUtOLElBQUwsR0FBWSxNQUFaO0FBQ0FNLGFBQUtMLFFBQUwsR0FBZ0IsT0FBaEI7QUFDQUssYUFBS0osS0FBTCxHQUFhLE9BQWI7QUFDQUksYUFBS0gsSUFBTCxHQUFZLE9BQVo7QUFDRCxPQWxCTztBQW1CUkssV0FuQlEsbUJBbUJBO0FBQ04sWUFBSUYsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLEtBQUwsR0FBYSxNQUFiO0FBQ0FRLGFBQUtQLElBQUwsR0FBWSxNQUFaO0FBQ0FPLGFBQUtOLElBQUwsR0FBWSxPQUFaO0FBQ0FNLGFBQUtKLEtBQUwsR0FBYSxPQUFiO0FBQ0FJLGFBQUtMLFFBQUwsR0FBZ0IsT0FBaEI7QUFDQUssYUFBS0gsSUFBTCxHQUFZLE9BQVo7QUFDRDtBQTNCTyxLOzs7Ozs2QkE2QkQsQ0FDUjs7OztFQTdDK0IsZUFBS00sSTs7a0JBQWxCbEIsSSIsImZpbGUiOiJ3b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29yayBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L2c5ZOB5LiA6KeIJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBhbmltYWw6ICdodHRwOi8vbXBpYy50aWFua29uZy5jb20vMzFlL2ExYi8zMWVhMWJmODA4YjRlMTExNGQ2ZGExYjcxYjM5MTgzMS82NDAuanBnJyxcbiAgICBoZWFkOiAnaHR0cDovL2ltZzAuaW1ndG4uYmRpbWcuY29tL2l0L3U9ODE0MTA0ODg1LDM2NTA2MzYwNzcmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHdoaXRlOiAnd2hpdGUnLFxuICAgIGdyYXk6ICdncmF5JyxcbiAgICBncmV5OiAnZ3JleScsXG4gICAgd2hpdGVvbmU6ICd3aGl0ZScsXG4gICAgYmxhY2s6ICdibGFjaycsXG4gICAgZGFyazogJ2JsYWNrJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdG90YWwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYud2hpdGUgPSAnd2hpdGUnXG4gICAgICBzZWxmLmdyYXkgPSAnZ3JheSdcbiAgICAgIHNlbGYuZ3JleSA9ICdncmV5J1xuICAgICAgc2VsZi53aGl0ZW9uZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuYmxhY2sgPSAnYmxhY2snXG4gICAgICBzZWxmLmRhcmsgPSAnYmxhY2snXG4gICAgfSxcbiAgICBwb3B1bGFyKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLndoaXRlID0gJ2dyYXknXG4gICAgICBzZWxmLmdyYXkgPSAnd2hpdGUnXG4gICAgICBzZWxmLmdyZXkgPSAnZ3JleSdcbiAgICAgIHNlbGYud2hpdGVvbmUgPSAnYmxhY2snXG4gICAgICBzZWxmLmJsYWNrID0gJ3doaXRlJ1xuICAgICAgc2VsZi5kYXJrID0gJ2JsYWNrJ1xuICAgIH0sXG4gICAgdG9kYXkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYud2hpdGUgPSAnZ3JleSdcbiAgICAgIHNlbGYuZ3JheSA9ICdncmF5J1xuICAgICAgc2VsZi5ncmV5ID0gJ3doaXRlJ1xuICAgICAgc2VsZi5ibGFjayA9ICdibGFjaydcbiAgICAgIHNlbGYud2hpdGVvbmUgPSAnYmxhY2snXG4gICAgICBzZWxmLmRhcmsgPSAnd2hpdGUnXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgfVxufVxuIl19