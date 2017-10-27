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
      like: '../image/like.png',
      red: 'red',
      gray: 'gray',
      grey: 'grey',
      get: [{ name: '灰暗中前行', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160705/1467683936743306_390x690.jpg' }, { name: '吊桥上奔走', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160624/1466732929459865_390x690.jpg' }, { name: '蓝色土耳其', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160525/1464146178360795_390x690.jpg' }, { name: '天地我唯一', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160225/1456362568730682_390x690.jpeg' }, { name: '一杯敬朝阳', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160812/1470963963789945_390x690.jpeg' }, { name: '一杯敬月光', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160818/1471483574651731_390x690.jpg' }, { name: '一杯敬故乡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160810/1470792195877180_390x690.jpg' }, { name: '一杯敬远方', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160729/1469754685123964_390x690.jpg' }, { name: '一杯敬明天', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160728/1469669030288254_390x690.jpg' }, { name: '一杯敬过往', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160727/1469582641108518_390x690.jpg' }, { name: '一杯敬自由', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160717/1468727507287634_390x690.jpg' }, { name: '一杯敬死亡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160715/1468545034466164_390x690.jpg' }],
      number: 0,
      content: null
    }, _this.methods = {
      today: function today() {
        var self = this;
        self.red = 'grey';
        self.gray = 'gray';
        self.grey = 'red';
        self.get = [{ name: '一杯敬朝阳', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160812/1470963963789945_390x690.jpeg' }, { name: '一杯敬月光', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160818/1471483574651731_390x690.jpg' }, { name: '一杯敬故乡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160810/1470792195877180_390x690.jpg' }, { name: '一杯敬远方', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160729/1469754685123964_390x690.jpg' }, { name: '一杯敬明天', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160728/1469669030288254_390x690.jpg' }, { name: '一杯敬过往', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160727/1469582641108518_390x690.jpg' }, { name: '一杯敬自由', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160717/1468727507287634_390x690.jpg' }, { name: '一杯敬死亡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160715/1468545034466164_390x690.jpg' }];
      },
      popular: function popular() {
        var self = this;
        self.red = 'grey';
        self.gray = 'red';
        self.grey = 'gray';
        self.get = [{ name: '一杯敬月光', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160818/1471483574651731_390x690.jpg' }, { name: '一杯敬故乡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160810/1470792195877180_390x690.jpg' }, { name: '一杯敬远方', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160729/1469754685123964_390x690.jpg' }, { name: '一杯敬明天', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160728/1469669030288254_390x690.jpg' }];
      },
      total: function total() {
        var self = this;
        self.red = 'red';
        self.gray = 'grey';
        self.grey = 'gray';
        self.get = [{ name: '灰暗中前行', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160705/1467683936743306_390x690.jpg' }, { name: '吊桥上奔走', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160624/1466732929459865_390x690.jpg' }, { name: '蓝色土耳其', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160525/1464146178360795_390x690.jpg' }, { name: '天地我唯一', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160225/1456362568730682_390x690.jpeg' }, { name: '一杯敬朝阳', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160812/1470963963789945_390x690.jpeg' }, { name: '一杯敬月光', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160818/1471483574651731_390x690.jpg' }, { name: '一杯敬故乡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160810/1470792195877180_390x690.jpg' }, { name: '一杯敬远方', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160729/1469754685123964_390x690.jpg' }, { name: '一杯敬明天', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160728/1469669030288254_390x690.jpg' }, { name: '一杯敬过往', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160727/1469582641108518_390x690.jpg' }, { name: '一杯敬自由', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160717/1468727507287634_390x690.jpg' }, { name: '一杯敬死亡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160715/1468545034466164_390x690.jpg' }];
      },
      count: function count() {
        var self = this;
        self.number++;
      }
      // skip() {
      //   let self = this
      //   let item = self.content[e.currentTarget.id]
      //   console.log(e)
      //   wepy.navigateTo({
      //     url: `./describe?name=${item.name}&photo=${item.photo}&number=${item.number}&describe=${item.describe}`
      //   })
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Works, [{
    key: 'onLoad',
    value: function onLoad() {
      // let self = this
      // self.content = content
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var _ = require('./../npm/lodash/lodash.js');
      var self = this;
      try {
        var value = _wepy2.default.getStorageSync('photo');
        console.log(value, '1');
        if (value) {
          value = _.toArray(value);
          value = { image: value[0], title: value[1], price: value[2], num: value[3], selected: value[4] };
          var carts = self.carts;
          carts.push(value);
          self.carts = carts;
          self.setData({
            carts: carts
          });
        }
      } catch (e) {
        // Do something when catch error
      }
    }
  }]);

  return Works;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Works , 'pages/works'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzLmpzIl0sIm5hbWVzIjpbIldvcmtzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJzZWFyY2giLCJsaWtlIiwicmVkIiwiZ3JheSIsImdyZXkiLCJnZXQiLCJuYW1lIiwicGhvdG8iLCJudW1iZXIiLCJjb250ZW50IiwibWV0aG9kcyIsInRvZGF5Iiwic2VsZiIsInBvcHVsYXIiLCJ0b3RhbCIsImNvdW50IiwiXyIsInJlcXVpcmUiLCJ2YWx1ZSIsImdldFN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsInRvQXJyYXkiLCJpbWFnZSIsInRpdGxlIiwicHJpY2UiLCJudW0iLCJzZWxlY3RlZCIsImNhcnRzIiwicHVzaCIsInNldERhdGEiLCJlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxjQUFRLHFCQUZIO0FBR0xDLFlBQU0sbUJBSEQ7QUFJTEMsV0FBSyxLQUpBO0FBS0xDLFlBQU0sTUFMRDtBQU1MQyxZQUFNLE1BTkQ7QUFPTEMsV0FBSyxDQUNILEVBQUVDLE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFERyxFQUVILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFGRyxFQUdILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFIRyxFQUlILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyx1RkFBeEIsRUFKRyxFQUtILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyx1RkFBeEIsRUFMRyxFQU1ILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFORyxFQU9ILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFQ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LEVBQWlCQyxPQUFPLHNGQUF4QixFQVpTLENBQVg7QUFjRCxPQWhETztBQWlEUlEsV0FqRFEsbUJBaURBO0FBQ04sWUFBSUgsT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLE1BQUw7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBNURRLEs7Ozs7OzZCQThERDtBQUNQO0FBQ0E7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBTVEsSUFBSUMsUUFBUSxRQUFSLENBQVY7QUFDQSxVQUFJTCxPQUFPLElBQVg7QUFDQSxVQUFJO0FBQ0YsWUFBSU0sUUFBUSxlQUFLQyxjQUFMLENBQW9CLE9BQXBCLENBQVo7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsS0FBWixFQUFtQixHQUFuQjtBQUNBLFlBQUlBLEtBQUosRUFBVztBQUNUQSxrQkFBUUYsRUFBRU0sT0FBRixDQUFVSixLQUFWLENBQVI7QUFDQUEsa0JBQVEsRUFBRUssT0FBT0wsTUFBTSxDQUFOLENBQVQsRUFBbUJNLE9BQU9OLE1BQU0sQ0FBTixDQUExQixFQUFvQ08sT0FBT1AsTUFBTSxDQUFOLENBQTNDLEVBQXFEUSxLQUFLUixNQUFNLENBQU4sQ0FBMUQsRUFBb0VTLFVBQVVULE1BQU0sQ0FBTixDQUE5RSxFQUFSO0FBQ0EsY0FBSVUsUUFBUWhCLEtBQUtnQixLQUFqQjtBQUNBQSxnQkFBTUMsSUFBTixDQUFXWCxLQUFYO0FBQ0FOLGVBQUtnQixLQUFMLEdBQWFBLEtBQWI7QUFDQWhCLGVBQUtrQixPQUFMLENBQWE7QUFDWEYsbUJBQU9BO0FBREksV0FBYjtBQUdEO0FBQ0YsT0FiRCxDQWFFLE9BQU9HLENBQVAsRUFBVTtBQUNWO0FBQ0Q7QUFDRjs7OztFQWpIZ0MsZUFBS0MsSTs7a0JBQW5CckMsSyIsImZpbGUiOiJ3b3Jrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkvZzlk4HkuIDop4jooagnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL3NlYXJjaC5wbmcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZS9saWtlLnBuZycsXG4gICAgcmVkOiAncmVkJyxcbiAgICBncmF5OiAnZ3JheScsXG4gICAgZ3JleTogJ2dyZXknLFxuICAgIGdldDogW1xuICAgICAgeyBuYW1lOiAn54Gw5pqX5Lit5YmN6KGMJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzA1LzE0Njc2ODM5MzY3NDMzMDZfMzkweDY5MC5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICflkIrmoaXkuIrlpZTotbAnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA2MjQvMTQ2NjczMjkyOTQ1OTg2NV8zOTB4NjkwLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+iTneiJsuWcn+iAs+WFticsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDUyNS8xNDY0MTQ2MTc4MzYwNzk1XzM5MHg2OTAuanBnJyB9LFxuICAgICAgeyBuYW1lOiAn5aSp5Zyw5oiR5ZSv5LiAJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwMjI1LzE0NTYzNjI1Njg3MzA2ODJfMzkweDY5MC5qcGVnJyB9LFxuICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5pyd6ZizJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwODEyLzE0NzA5NjM5NjM3ODk5NDVfMzkweDY5MC5qcGVnJyB9LFxuICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5pyI5YWJJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwODE4LzE0NzE0ODM1NzQ2NTE3MzFfMzkweDY5MC5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICfkuIDmna/mlazmlYXkuaEnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA4MTAvMTQ3MDc5MjE5NTg3NzE4MF8zOTB4NjkwLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOi/nOaWuScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcyOS8xNDY5NzU0Njg1MTIzOTY0XzM5MHg2OTAuanBnJyB9LFxuICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5piO5aSpJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzI4LzE0Njk2NjkwMzAyODgyNTRfMzkweDY5MC5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICfkuIDmna/mlazov4flvoAnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MjcvMTQ2OTU4MjY0MTEwODUxOF8zOTB4NjkwLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOiHqueUsScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcxNy8xNDY4NzI3NTA3Mjg3NjM0XzM5MHg2OTAuanBnJyB9LFxuICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5q275LqhJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzE1LzE0Njg1NDUwMzQ0NjYxNjRfMzkweDY5MC5qcGcnIH1cbiAgICBdLFxuICAgIG51bWJlcjogMCxcbiAgICBjb250ZW50OiBudWxsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0b2RheSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5yZWQgPSAnZ3JleSdcbiAgICAgIHNlbGYuZ3JheSA9ICdncmF5J1xuICAgICAgc2VsZi5ncmV5ID0gJ3JlZCdcbiAgICAgIHNlbGYuZ2V0ID0gW1xuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmnJ3pmLMnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA4MTIvMTQ3MDk2Mzk2Mzc4OTk0NV8zOTB4NjkwLmpwZWcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOaciOWFiScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgxOC8xNDcxNDgzNTc0NjUxNzMxXzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmlYXkuaEnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA4MTAvMTQ3MDc5MjE5NTg3NzE4MF8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs6L+c5pa5JywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzI5LzE0Njk3NTQ2ODUxMjM5NjRfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOaYjuWkqScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcyOC8xNDY5NjY5MDMwMjg4MjU0XzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazov4flvoAnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MjcvMTQ2OTU4MjY0MTEwODUxOF8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs6Ieq55SxJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzE3LzE0Njg3Mjc1MDcyODc2MzRfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOatu+S6oScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcxNS8xNDY4NTQ1MDM0NDY2MTY0XzM5MHg2OTAuanBnJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICBwb3B1bGFyKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnJlZCA9ICdncmV5J1xuICAgICAgc2VsZi5ncmF5ID0gJ3JlZCdcbiAgICAgIHNlbGYuZ3JleSA9ICdncmF5J1xuICAgICAgc2VsZi5nZXQgPSBbXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOaciOWFiScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgxOC8xNDcxNDgzNTc0NjUxNzMxXzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmlYXkuaEnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA4MTAvMTQ3MDc5MjE5NTg3NzE4MF8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs6L+c5pa5JywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzI5LzE0Njk3NTQ2ODUxMjM5NjRfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOaYjuWkqScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcyOC8xNDY5NjY5MDMwMjg4MjU0XzM5MHg2OTAuanBnJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB0b3RhbCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5yZWQgPSAncmVkJ1xuICAgICAgc2VsZi5ncmF5ID0gJ2dyZXknXG4gICAgICBzZWxmLmdyZXkgPSAnZ3JheSdcbiAgICAgIHNlbGYuZ2V0ID0gW1xuICAgICAgICB7IG5hbWU6ICfngbDmmpfkuK3liY3ooYwnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MDUvMTQ2NzY4MzkzNjc0MzMwNl8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5ZCK5qGl5LiK5aWU6LWwJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNjI0LzE0NjY3MzI5Mjk0NTk4NjVfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+iTneiJsuWcn+iAs+WFticsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDUyNS8xNDY0MTQ2MTc4MzYwNzk1XzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICflpKnlnLDmiJHllK/kuIAnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjAyMjUvMTQ1NjM2MjU2ODczMDY4Ml8zOTB4NjkwLmpwZWcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOacnemYsycsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgxMi8xNDcwOTYzOTYzNzg5OTQ1XzM5MHg2OTAuanBlZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5pyI5YWJJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwODE4LzE0NzE0ODM1NzQ2NTE3MzFfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOaVheS5oScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgxMC8xNDcwNzkyMTk1ODc3MTgwXzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazov5zmlrknLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MjkvMTQ2OTc1NDY4NTEyMzk2NF8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5piO5aSpJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzI4LzE0Njk2NjkwMzAyODgyNTRfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOi/h+W+gCcsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcyNy8xNDY5NTgyNjQxMTA4NTE4XzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazoh6rnlLEnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MTcvMTQ2ODcyNzUwNzI4NzYzNF8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5q275LqhJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzE1LzE0Njg1NDUwMzQ0NjYxNjRfMzkweDY5MC5qcGcnIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGNvdW50KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLm51bWJlcisrXG4gICAgfVxuICAgIC8vIHNraXAoKSB7XG4gICAgLy8gICBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyAgIGxldCBpdGVtID0gc2VsZi5jb250ZW50W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICB1cmw6IGAuL2Rlc2NyaWJlP25hbWU9JHtpdGVtLm5hbWV9JnBob3RvPSR7aXRlbS5waG90b30mbnVtYmVyPSR7aXRlbS5udW1iZXJ9JmRlc2NyaWJlPSR7aXRlbS5kZXNjcmliZX1gXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gc2VsZi5jb250ZW50ID0gY29udGVudFxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJylcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB0cnkge1xuICAgICAgdmFyIHZhbHVlID0gd2VweS5nZXRTdG9yYWdlU3luYygncGhvdG8nKVxuICAgICAgY29uc29sZS5sb2codmFsdWUsICcxJylcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IF8udG9BcnJheSh2YWx1ZSlcbiAgICAgICAgdmFsdWUgPSB7IGltYWdlOiB2YWx1ZVswXSwgdGl0bGU6IHZhbHVlWzFdLCBwcmljZTogdmFsdWVbMl0sIG51bTogdmFsdWVbM10sIHNlbGVjdGVkOiB2YWx1ZVs0XSB9XG4gICAgICAgIGxldCBjYXJ0cyA9IHNlbGYuY2FydHNcbiAgICAgICAgY2FydHMucHVzaCh2YWx1ZSlcbiAgICAgICAgc2VsZi5jYXJ0cyA9IGNhcnRzXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgY2FydHM6IGNhcnRzXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIHdoZW4gY2F0Y2ggZXJyb3JcbiAgICB9XG4gIH1cbn1cbiJdfQ==