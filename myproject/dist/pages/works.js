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
      get: [{ name: '一杯敬朝阳', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160812/1470963963789945_390x690.jpeg' }, { name: '一杯敬月光', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160818/1471483574651731_390x690.jpg' }, { name: '一杯敬故乡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160810/1470792195877180_390x690.jpg' }, { name: '一杯敬远方', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160729/1469754685123964_390x690.jpg' }, { name: '一杯敬明天', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160728/1469669030288254_390x690.jpg' }, { name: '一杯敬过往', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160727/1469582641108518_390x690.jpg' }, { name: '一杯敬自由', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160717/1468727507287634_390x690.jpg' }, { name: '一杯敬死亡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160715/1468545034466164_390x690.jpg' }]
    }, _this.methods = {
      today: function today() {
        var self = this;
        self.red = 'red';
        self.gray = 'gray';
        self.grey = 'grey';
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
        self.red = 'gray';
        self.gray = 'grey';
        self.grey = 'red';
        self.get = [{ name: '灰暗中前行', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160705/1467683936743306_390x690.jpg' }, { name: '吊桥上奔走', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160624/1466732929459865_390x690.jpg' }, { name: '蓝色土耳其', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160525/1464146178360795_390x690.jpg' }, { name: '天地我唯一', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160225/1456362568730682_390x690.jpeg' }, { name: '一杯敬朝阳', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160812/1470963963789945_390x690.jpeg' }, { name: '一杯敬月光', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160818/1471483574651731_390x690.jpg' }, { name: '一杯敬故乡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160810/1470792195877180_390x690.jpg' }, { name: '一杯敬远方', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160729/1469754685123964_390x690.jpg' }, { name: '一杯敬明天', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160728/1469669030288254_390x690.jpg' }, { name: '一杯敬过往', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160727/1469582641108518_390x690.jpg' }, { name: '一杯敬自由', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160717/1468727507287634_390x690.jpg' }, { name: '一杯敬死亡', photo: 'https://img.25pp.com/uploadfile/bizhi/iphone6p/20160715/1468545034466164_390x690.jpg' }];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtzLmpzIl0sIm5hbWVzIjpbIldvcmtzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJzZWFyY2giLCJyZWQiLCJncmF5IiwiZ3JleSIsImdldCIsIm5hbWUiLCJwaG90byIsIm1ldGhvZHMiLCJ0b2RheSIsInNlbGYiLCJwb3B1bGFyIiwidG90YWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEscUJBRkg7QUFHTEMsV0FBSyxLQUhBO0FBSUxDLFlBQU0sTUFKRDtBQUtMQyxZQUFNLE1BTEQ7QUFNTEMsV0FBSyxDQUNILEVBQUVDLE1BQU0sT0FBUixFQUFpQkMsT0FBTyx1RkFBeEIsRUFERyxFQUVILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFGRyxFQUdILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFIRyxFQUlILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFKRyxFQUtILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFMRyxFQU1ILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFORyxFQU9ILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFQRyxFQVFILEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFSRztBQU5BLEssUUFpQlBDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLEdBQUwsR0FBVyxLQUFYO0FBQ0FRLGFBQUtQLElBQUwsR0FBWSxNQUFaO0FBQ0FPLGFBQUtOLElBQUwsR0FBWSxNQUFaO0FBQ0FNLGFBQUtMLEdBQUwsR0FBVyxDQUNULEVBQUVDLE1BQU0sT0FBUixFQUFpQkMsT0FBTyx1RkFBeEIsRUFEUyxFQUVULEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFGUyxFQUdULEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFIUyxFQUlULEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFKUyxFQUtULEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFMUyxFQU1ULEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFOUyxFQU9ULEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFQUyxFQVFULEVBQUVELE1BQU0sT0FBUixFQUFpQkMsT0FBTyxzRkFBeEIsRUFSUyxDQUFYO0FBVUQsT0FoQk87QUFpQlJJLGFBakJRLHFCQWlCRTtBQUNSLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLUixHQUFMLEdBQVcsTUFBWDtBQUNBUSxhQUFLUCxJQUFMLEdBQVksS0FBWjtBQUNBTyxhQUFLTixJQUFMLEdBQVksTUFBWjtBQUNBTSxhQUFLTCxHQUFMLEdBQVcsQ0FDVCxFQUFFQyxNQUFNLE9BQVIsRUFBaUJDLE9BQU8sc0ZBQXhCLEVBRFMsRUFFVCxFQUFFRCxNQUFNLE9BQVIsRUFBaUJDLE9BQU8sc0ZBQXhCLEVBRlMsRUFHVCxFQUFFRCxNQUFNLE9BQVIsRUFBaUJDLE9BQU8sc0ZBQXhCLEVBSFMsRUFJVCxFQUFFRCxNQUFNLE9BQVIsRUFBaUJDLE9BQU8sc0ZBQXhCLEVBSlMsQ0FBWDtBQU1ELE9BNUJPO0FBNkJSSyxXQTdCUSxtQkE2QkE7QUFDTixZQUFJRixPQUFPLElBQVg7QUFDQUEsYUFBS1IsR0FBTCxHQUFXLE1BQVg7QUFDQVEsYUFBS1AsSUFBTCxHQUFZLE1BQVo7QUFDQU8sYUFBS04sSUFBTCxHQUFZLEtBQVo7QUFDQU0sYUFBS0wsR0FBTCxHQUFXLENBQ1QsRUFBRUMsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQURTLEVBRVQsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQUZTLEVBR1QsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQUhTLEVBSVQsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHVGQUF4QixFQUpTLEVBS1QsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHVGQUF4QixFQUxTLEVBTVQsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQU5TLEVBT1QsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQVBTLEVBUVQsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQVJTLEVBU1QsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQVRTLEVBVVQsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQVZTLEVBV1QsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQVhTLEVBWVQsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxPQUFPLHNGQUF4QixFQVpTLENBQVg7QUFjRDtBQWhETyxLOzs7Ozs2QkFrREQsQ0FBRzs7OztFQXZFcUIsZUFBS00sSTs7a0JBQW5CakIsSyIsImZpbGUiOiJ3b3Jrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkvZzlk4HkuIDop4jooagnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL3NlYXJjaC5wbmcnLFxuICAgIHJlZDogJ3JlZCcsXG4gICAgZ3JheTogJ2dyYXknLFxuICAgIGdyZXk6ICdncmV5JyxcbiAgICBnZXQ6IFtcbiAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOacnemYsycsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgxMi8xNDcwOTYzOTYzNzg5OTQ1XzM5MHg2OTAuanBlZycgfSxcbiAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOaciOWFiScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgxOC8xNDcxNDgzNTc0NjUxNzMxXzM5MHg2OTAuanBnJyB9LFxuICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5pWF5LmhJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwODEwLzE0NzA3OTIxOTU4NzcxODBfMzkweDY5MC5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICfkuIDmna/mlazov5zmlrknLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MjkvMTQ2OTc1NDY4NTEyMzk2NF8zOTB4NjkwLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOaYjuWkqScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcyOC8xNDY5NjY5MDMwMjg4MjU0XzM5MHg2OTAuanBnJyB9LFxuICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs6L+H5b6AJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzI3LzE0Njk1ODI2NDExMDg1MThfMzkweDY5MC5qcGcnIH0sXG4gICAgICB7IG5hbWU6ICfkuIDmna/mlazoh6rnlLEnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MTcvMTQ2ODcyNzUwNzI4NzYzNF8zOTB4NjkwLmpwZycgfSxcbiAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOatu+S6oScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcxNS8xNDY4NTQ1MDM0NDY2MTY0XzM5MHg2OTAuanBnJyB9XG4gICAgXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdG9kYXkoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYucmVkID0gJ3JlZCdcbiAgICAgIHNlbGYuZ3JheSA9ICdncmF5J1xuICAgICAgc2VsZi5ncmV5ID0gJ2dyZXknXG4gICAgICBzZWxmLmdldCA9IFtcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5pyd6ZizJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwODEyLzE0NzA5NjM5NjM3ODk5NDVfMzkweDY5MC5qcGVnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmnIjlhYknLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA4MTgvMTQ3MTQ4MzU3NDY1MTczMV8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5pWF5LmhJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwODEwLzE0NzA3OTIxOTU4NzcxODBfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOi/nOaWuScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcyOS8xNDY5NzU0Njg1MTIzOTY0XzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmmI7lpKknLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MjgvMTQ2OTY2OTAzMDI4ODI1NF8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs6L+H5b6AJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzI3LzE0Njk1ODI2NDExMDg1MThfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOiHqueUsScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcxNy8xNDY4NzI3NTA3Mjg3NjM0XzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmrbvkuqEnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MTUvMTQ2ODU0NTAzNDQ2NjE2NF8zOTB4NjkwLmpwZycgfVxuICAgICAgXVxuICAgIH0sXG4gICAgcG9wdWxhcigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5yZWQgPSAnZ3JleSdcbiAgICAgIHNlbGYuZ3JheSA9ICdyZWQnXG4gICAgICBzZWxmLmdyZXkgPSAnZ3JheSdcbiAgICAgIHNlbGYuZ2V0ID0gW1xuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmnIjlhYknLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA4MTgvMTQ3MTQ4MzU3NDY1MTczMV8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs5pWF5LmhJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwODEwLzE0NzA3OTIxOTU4NzcxODBfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOi/nOaWuScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcyOS8xNDY5NzU0Njg1MTIzOTY0XzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmmI7lpKknLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MjgvMTQ2OTY2OTAzMDI4ODI1NF8zOTB4NjkwLmpwZycgfVxuICAgICAgXVxuICAgIH0sXG4gICAgdG90YWwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYucmVkID0gJ2dyYXknXG4gICAgICBzZWxmLmdyYXkgPSAnZ3JleSdcbiAgICAgIHNlbGYuZ3JleSA9ICdyZWQnXG4gICAgICBzZWxmLmdldCA9IFtcbiAgICAgICAgeyBuYW1lOiAn54Gw5pqX5Lit5YmN6KGMJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzA1LzE0Njc2ODM5MzY3NDMzMDZfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+WQiuahpeS4iuWllOi1sCcsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDYyNC8xNDY2NzMyOTI5NDU5ODY1XzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfok53oibLlnJ/ogLPlhbYnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA1MjUvMTQ2NDE0NjE3ODM2MDc5NV8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5aSp5Zyw5oiR5ZSv5LiAJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwMjI1LzE0NTYzNjI1Njg3MzA2ODJfMzkweDY5MC5qcGVnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmnJ3pmLMnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA4MTIvMTQ3MDk2Mzk2Mzc4OTk0NV8zOTB4NjkwLmpwZWcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOaciOWFiScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDgxOC8xNDcxNDgzNTc0NjUxNzMxXzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazmlYXkuaEnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA4MTAvMTQ3MDc5MjE5NTg3NzE4MF8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs6L+c5pa5JywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzI5LzE0Njk3NTQ2ODUxMjM5NjRfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOaYjuWkqScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcyOC8xNDY5NjY5MDMwMjg4MjU0XzM5MHg2OTAuanBnJyB9LFxuICAgICAgICB7IG5hbWU6ICfkuIDmna/mlazov4flvoAnLCBwaG90bzogJ2h0dHBzOi8vaW1nLjI1cHAuY29tL3VwbG9hZGZpbGUvYml6aGkvaXBob25lNnAvMjAxNjA3MjcvMTQ2OTU4MjY0MTEwODUxOF8zOTB4NjkwLmpwZycgfSxcbiAgICAgICAgeyBuYW1lOiAn5LiA5p2v5pWs6Ieq55SxJywgcGhvdG86ICdodHRwczovL2ltZy4yNXBwLmNvbS91cGxvYWRmaWxlL2JpemhpL2lwaG9uZTZwLzIwMTYwNzE3LzE0Njg3Mjc1MDcyODc2MzRfMzkweDY5MC5qcGcnIH0sXG4gICAgICAgIHsgbmFtZTogJ+S4gOadr+aVrOatu+S6oScsIHBob3RvOiAnaHR0cHM6Ly9pbWcuMjVwcC5jb20vdXBsb2FkZmlsZS9iaXpoaS9pcGhvbmU2cC8yMDE2MDcxNS8xNDY4NTQ1MDM0NDY2MTY0XzM5MHg2OTAuanBnJyB9XG4gICAgICBdXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19