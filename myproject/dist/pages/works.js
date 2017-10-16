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

var Works = function (_wepy$page) {
  _inherits(Works, _wepy$page);

  function Works() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Works);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Works.__proto__ || Object.getPrototypeOf(Works)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '作品一览表'
    }, _this.data = {
      src: '',
      search: '../image/search.png',
      red: 'red',
      gray: 'gray',
      grey: 'grey',
      get: [
        // { name: '黑丝贼性感', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20150720/1437386706866468_390x690.jpg' },
        // { name: '露臀就是骚', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/2014/1029/20141029090834470_ios.jpg' },
        // { name: '性感不是骚'，photo: ''},
      ]
    }, _this.methods = {
      today: function today() {
        var self = this;
        self.red = 'red';
        self.gray = 'gray';
        self.grey = 'grey';
      },
      popular: function popular() {
        var self = this;
        self.red = 'grey';
        self.gray = 'red';
        self.grey = 'gray';
      },
      total: function total() {
        var self = this;
        self.red = 'gray';
        self.gray = 'grey';
        self.grey = 'red';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Works, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Works;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Works , 'pages/works'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzLmpzIl0sIm5hbWVzIjpbIldvcmtzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJzZWFyY2giLCJyZWQiLCJncmF5IiwiZ3JleSIsImdldCIsIm1ldGhvZHMiLCJ0b2RheSIsInNlbGYiLCJwb3B1bGFyIiwidG90YWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEscUJBRkg7QUFHTEMsV0FBSyxLQUhBO0FBSUxDLFlBQU0sTUFKRDtBQUtMQyxZQUFNLE1BTEQ7QUFNTEMsV0FBSztBQUNIO0FBQ0E7QUFDQTtBQUhHO0FBTkEsSyxRQVlQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTixHQUFMLEdBQVcsS0FBWDtBQUNBTSxhQUFLTCxJQUFMLEdBQVksTUFBWjtBQUNBSyxhQUFLSixJQUFMLEdBQVksTUFBWjtBQUNELE9BTk87QUFPUkssYUFQUSxxQkFPRTtBQUNSLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLTixHQUFMLEdBQVcsTUFBWDtBQUNBTSxhQUFLTCxJQUFMLEdBQVksS0FBWjtBQUNBSyxhQUFLSixJQUFMLEdBQVksTUFBWjtBQUNELE9BWk87QUFhUk0sV0FiUSxtQkFhQTtBQUNOLFlBQUlGLE9BQU8sSUFBWDtBQUNBQSxhQUFLTixHQUFMLEdBQVcsTUFBWDtBQUNBTSxhQUFLTCxJQUFMLEdBQVksTUFBWjtBQUNBSyxhQUFLSixJQUFMLEdBQVksS0FBWjtBQUNEO0FBbEJPLEs7Ozs7OzZCQW9CRCxDQUFHOzs7O0VBcENxQixlQUFLTyxJOztrQkFBbkJmLEsiLCJmaWxlIjoid29ya3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L2c5ZOB5LiA6KeI6KGoJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBzZWFyY2g6ICcuLi9pbWFnZS9zZWFyY2gucG5nJyxcbiAgICByZWQ6ICdyZWQnLFxuICAgIGdyYXk6ICdncmF5JyxcbiAgICBncmV5OiAnZ3JleScsXG4gICAgZ2V0OiBbXG4gICAgICAvLyB7IG5hbWU6ICfpu5HkuJ3otLzmgKfmhJ8nLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNTA3MjAvMTQzNzM4NjcwNjg2NjQ2OF8zOTB4NjkwLmpwZycgfSxcbiAgICAgIC8vIHsgbmFtZTogJ+mcsuiHgOWwseaYr+mqmicsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE0LzEwMjkvMjAxNDEwMjkwOTA4MzQ0NzBfaW9zLmpwZycgfSxcbiAgICAgIC8vIHsgbmFtZTogJ+aAp+aEn+S4jeaYr+mqmifvvIxwaG90bzogJyd9LFxuICAgIF1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRvZGF5KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnJlZCA9ICdyZWQnXG4gICAgICBzZWxmLmdyYXkgPSAnZ3JheSdcbiAgICAgIHNlbGYuZ3JleSA9ICdncmV5J1xuICAgIH0sXG4gICAgcG9wdWxhcigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5yZWQgPSAnZ3JleSdcbiAgICAgIHNlbGYuZ3JheSA9ICdyZWQnXG4gICAgICBzZWxmLmdyZXkgPSAnZ3JheSdcbiAgICB9LFxuICAgIHRvdGFsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnJlZCA9ICdncmF5J1xuICAgICAgc2VsZi5ncmF5ID0gJ2dyZXknXG4gICAgICBzZWxmLmdyZXkgPSAncmVkJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==