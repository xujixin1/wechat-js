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
      plus: '../image/plus.png'
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
          count: 3,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var arr = self.src;
            var a = arr.concat(res.tempFilePaths);
            if (a.length > 3) {
              _wepy2.default.showToast({
                title: '最多选择三张照片',
                icon: 'success',
                duration: 1000
              });
              return;
            }
            self.src = a;
            self.setData({
              src: a
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Join, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Join;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Join , 'pages/join'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4uanMiXSwibmFtZXMiOlsiSm9pbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicGx1cyIsIm1ldGhvZHMiLCJ0YXAiLCJzZWxmIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImFyciIsImEiLCJjb25jYXQiLCJ0ZW1wRmlsZVBhdGhzIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsWUFBTTtBQUZELEssUUFJUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLSixHQUFMLENBQVNLLE1BQVQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxtQkFBTyxVQURNO0FBRWJDLGtCQUFNLFNBRk87QUFHYkMsc0JBQVU7QUFIRyxXQUFmO0FBS0E7QUFDRDtBQUNELHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFE7QUFFZkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLO0FBR2ZDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRztBQUlmQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJQyxNQUFNWixLQUFLSixHQUFmO0FBQ0EsZ0JBQUlpQixJQUFJRCxJQUFJRSxNQUFKLENBQVdILElBQUlJLGFBQWYsQ0FBUjtBQUNBLGdCQUFJRixFQUFFWixNQUFGLEdBQVcsQ0FBZixFQUFrQjtBQUNoQiw2QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHVCQUFPLFVBRE07QUFFYkMsc0JBQU0sU0FGTztBQUdiQywwQkFBVTtBQUhHLGVBQWY7QUFLQTtBQUNEO0FBQ0RMLGlCQUFLSixHQUFMLEdBQVdpQixDQUFYO0FBQ0FiLGlCQUFLZ0IsT0FBTCxDQUFhO0FBQ1hwQixtQkFBS2lCO0FBRE0sYUFBYjtBQUdEO0FBbkJjLFNBQWpCO0FBcUJEO0FBaENPLEs7Ozs7OzZCQWtDRCxDQUNSOzs7O0VBM0MrQixlQUFLSSxJOztrQkFBbEJ6QixJIiwiZmlsZSI6ImpvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHopoHlj4LotZsnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6IFtdLFxuICAgIHBsdXM6ICcuLi9pbWFnZS9wbHVzLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRhcCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuc3JjLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+acgOWkmumAieaLqeS4ieW8oOeFp+eJhycsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAzLFxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGxldCBhcnIgPSBzZWxmLnNyY1xuICAgICAgICAgIGxldCBhID0gYXJyLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocylcbiAgICAgICAgICBpZiAoYS5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5pyA5aSa6YCJ5oup5LiJ5byg54Wn54mHJyxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNyYyA9IGFcbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgc3JjOiBhXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG59XG4iXX0=