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

var Join = function (_wepy$page) {
  _inherits(Join, _wepy$page);

  function Join() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Join);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Join.__proto__ || Object.getPrototypeOf(Join)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我要参赛'
    }, _this.data = {
      src: [],
      plus: '../image/plus.png',
      height: 0,
      width: 0,
      value: '',
      array: ['生活', '亲情', '回归', '风雨'],
      objectArray: [{
        id: 0,
        name: '生活'
      }, {
        id: 1,
        name: '亲情'
      }, {
        id: 2,
        name: '回归'
      }, {
        id: 3,
        name: '风雨'
      }]
    }, _this.methods = {
      tap: function tap() {
        var self = this;
        if (self.src.length >= 3) {
          _wepy2.default.showToast({
            title: '最多选择三张照片',
            icon: 'success',
            duration: 1000
          });
          return;
        }
        _wepy2.default.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var arr = self.src;
            arr.push(res.tempFilePaths[0]);
            self.src = arr;
            self.setData({
              src: arr
            });
          }
        });
      },
      bindPickerChange: function bindPickerChange(e) {
        var self = this;
        console.log('picker发送选择改变，携带值为', e.detail.value);
        self.setData({
          index: e.detail.value
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Join, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Join;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Join , 'pages/join'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4uanMiXSwibmFtZXMiOlsiSm9pbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicGx1cyIsImhlaWdodCIsIndpZHRoIiwidmFsdWUiLCJhcnJheSIsIm9iamVjdEFycmF5IiwiaWQiLCJuYW1lIiwibWV0aG9kcyIsInRhcCIsInNlbGYiLCJsZW5ndGgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYXJyIiwicHVzaCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiaW5kZXgiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFlBQU0sbUJBRkQ7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLGFBQU8sQ0FKRjtBQUtMQyxhQUFPLEVBTEY7QUFNTEMsYUFBTyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQU5GO0FBT0xDLG1CQUFhLENBQ1g7QUFDRUMsWUFBSSxDQUROO0FBRUVDLGNBQU07QUFGUixPQURXLEVBS1g7QUFDRUQsWUFBSSxDQUROO0FBRUVDLGNBQU07QUFGUixPQUxXLEVBU1g7QUFDRUQsWUFBSSxDQUROO0FBRUVDLGNBQU07QUFGUixPQVRXLEVBYVg7QUFDRUQsWUFBSSxDQUROO0FBRUVDLGNBQU07QUFGUixPQWJXO0FBUFIsSyxRQTBCUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLWCxHQUFMLENBQVNZLE1BQVQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxtQkFBTyxVQURNO0FBRWJDLGtCQUFNLFNBRk87QUFHYkMsc0JBQVU7QUFIRyxXQUFmO0FBS0E7QUFDRDtBQUNELHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFE7QUFFZkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLO0FBR2ZDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRztBQUlmQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJQyxNQUFNWixLQUFLWCxHQUFmO0FBQ0F1QixnQkFBSUMsSUFBSixDQUFTRixJQUFJRyxhQUFKLENBQWtCLENBQWxCLENBQVQ7QUFDQWQsaUJBQUtYLEdBQUwsR0FBV3VCLEdBQVg7QUFDQVosaUJBQUtlLE9BQUwsQ0FBYTtBQUNYMUIsbUJBQUt1QjtBQURNLGFBQWI7QUFHRDtBQVhjLFNBQWpCO0FBYUQsT0F4Qk87QUF5QlJJLHNCQXpCUSw0QkF5QlNDLENBekJULEVBeUJZO0FBQ2xCLFlBQUlqQixPQUFPLElBQVg7QUFDQWtCLGdCQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLEVBQUVHLE1BQUYsQ0FBUzNCLEtBQTFDO0FBQ0FPLGFBQUtlLE9BQUwsQ0FBYTtBQUNYTSxpQkFBT0osRUFBRUcsTUFBRixDQUFTM0I7QUFETCxTQUFiO0FBR0Q7QUEvQk8sSzs7Ozs7NkJBaUNEO0FBQ1AsVUFBSU8sT0FBTyxJQUFYO0FBQ0EscUJBQUtzQixhQUFMLENBQW1CO0FBQ2pCWixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hYLGVBQUtULE1BQUwsR0FBY29CLElBQUlZLFlBQWxCO0FBQ0F2QixlQUFLUixLQUFMLEdBQWFtQixJQUFJYSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUF2RStCLGVBQUtDLEk7O2tCQUFsQnhDLEkiLCJmaWxlIjoiam9pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvaW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeimgeWPgui1mydcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogW10sXG4gICAgcGx1czogJy4uL2ltYWdlL3BsdXMucG5nJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgdmFsdWU6ICcnLFxuICAgIGFycmF5OiBbJ+eUn+a0uycsICfkurLmg4UnLCAn5Zue5b2SJywgJ+mjjumbqCddLFxuICAgIG9iamVjdEFycmF5OiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAn55Sf5rS7J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICfkurLmg4UnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ+WbnuW9kidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAn6aOO6ZuoJ1xuICAgICAgfVxuICAgIF1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRhcCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuc3JjLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+acgOWkmumAieaLqeS4ieW8oOeFp+eJhycsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGxldCBhcnIgPSBzZWxmLnNyY1xuICAgICAgICAgIGFyci5wdXNoKHJlcy50ZW1wRmlsZVBhdGhzWzBdKVxuICAgICAgICAgIHNlbGYuc3JjID0gYXJyXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHNyYzogYXJyXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBpbmRleDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=