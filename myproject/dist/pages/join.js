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
      width: 0
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
      },
      set: function set() {
        try {
          _wepy2.default.setStorageSync('photo', self.describe);
        } catch (e) {}
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4uanMiXSwibmFtZXMiOlsiSm9pbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicGx1cyIsImhlaWdodCIsIndpZHRoIiwibWV0aG9kcyIsInRhcCIsInNlbGYiLCJsZW5ndGgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYXJyIiwiYSIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwic2V0Iiwic2V0U3RvcmFnZVN5bmMiLCJkZXNjcmliZSIsImUiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFlBQU0sbUJBRkQ7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUEsS0FBS04sR0FBTCxDQUFTTyxNQUFULElBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLHlCQUFLQyxTQUFMLENBQWU7QUFDYkMsbUJBQU8sVUFETTtBQUViQyxrQkFBTSxTQUZPO0FBR2JDLHNCQUFVO0FBSEcsV0FBZjtBQUtBO0FBQ0Q7QUFDRCx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxDQURRO0FBRWZDLG9CQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGSztBQUdmQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEc7QUFJZkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUMsTUFBTVosS0FBS04sR0FBZjtBQUNBLGdCQUFJbUIsSUFBSUQsSUFBSUUsTUFBSixDQUFXSCxJQUFJSSxhQUFmLENBQVI7QUFDQSxnQkFBSUYsRUFBRVosTUFBRixHQUFXLENBQWYsRUFBa0I7QUFDaEIsNkJBQUtDLFNBQUwsQ0FBZTtBQUNiQyx1QkFBTyxVQURNO0FBRWJDLHNCQUFNLFNBRk87QUFHYkMsMEJBQVU7QUFIRyxlQUFmO0FBS0E7QUFDRDtBQUNETCxpQkFBS04sR0FBTCxHQUFXbUIsQ0FBWDtBQUNBYixpQkFBS2dCLE9BQUwsQ0FBYTtBQUNYdEIsbUJBQUttQjtBQURNLGFBQWI7QUFHRDtBQW5CYyxTQUFqQjtBQXFCRCxPQWhDTztBQWlDUkksU0FqQ1EsaUJBaUNGO0FBQ0osWUFBSTtBQUNGLHlCQUFLQyxjQUFMLENBQW9CLE9BQXBCLEVBQTZCbEIsS0FBS21CLFFBQWxDO0FBQ0QsU0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVSxDQUFFO0FBQ2Y7QUFyQ08sSzs7Ozs7NkJBdUNEO0FBQ1AsVUFBSXBCLE9BQU8sSUFBWDtBQUNBLHFCQUFLcUIsYUFBTCxDQUFtQjtBQUNqQlgsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWCxlQUFLSixNQUFMLEdBQWNlLElBQUlXLFlBQWxCO0FBQ0F0QixlQUFLSCxLQUFMLEdBQWFjLElBQUlZLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFPRDs7OztFQTFEK0IsZUFBS0MsSTs7a0JBQWxCbEMsSSIsImZpbGUiOiJqb2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9pbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR6KaB5Y+C6LWbJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiBbXSxcbiAgICBwbHVzOiAnLi4vaW1hZ2UvcGx1cy5wbmcnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5zcmMubGVuZ3RoID49IDMpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5pyA5aSa6YCJ5oup5LiJ5byg54Wn54mHJyxcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDMsXG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgbGV0IGFyciA9IHNlbGYuc3JjXG4gICAgICAgICAgbGV0IGEgPSBhcnIuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKVxuICAgICAgICAgIGlmIChhLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmnIDlpJrpgInmi6nkuInlvKDnhafniYcnLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc3JjID0gYVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBzcmM6IGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgc2V0KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygncGhvdG8nLCBzZWxmLmRlc2NyaWJlKVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuXG4gICAgfSlcbiAgfVxufVxuIl19