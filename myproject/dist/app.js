'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/join', 'pages/works', 'pages/mine', 'pages/about', 'pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: 'pink',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        backgroundColor: '#ffc0cb',
        color: '#FFF8DC',
        selectedColor: '#000000',
        list: [{
          pagePath: 'pages/home',
          text: '首页',
          iconPath: './image/firstone.png',
          selectedIconPath: './image/first.png'
        }, {
          pagePath: 'pages/join',
          text: '参赛入口',
          iconPath: './image/join.png',
          selectedIconPath: './image/joinone.png'
        }, {
          pagePath: 'pages/works',
          text: '作品入口',
          iconPath: './image/works.png',
          selectedIconPath: './image/worksone.png'
        }, {
          pagePath: 'pages/mine',
          text: '个人主页',
          iconPath: './image/person.png',
          selectedIconPath: './image/personone.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWtERSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBL0NkQSxNQStDYyxHQS9DTDtBQUNQQyxhQUFPLENBQ0wsWUFESyxFQUVMLFlBRkssRUFHTCxhQUhLLEVBSUwsWUFKSyxFQUtMLGFBTEssRUFNTCxhQU5LLENBREE7QUFTUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQVREO0FBZVBDLGNBQVE7QUFDTkMseUJBQWlCLFNBRFg7QUFFTkMsZUFBTyxTQUZEO0FBR05DLHVCQUFlLFNBSFQ7QUFJTkMsY0FBTSxDQUFDO0FBQ0xDLG9CQUFVLFlBREw7QUFFTEMsZ0JBQU0sSUFGRDtBQUdMQyxvQkFBVSxzQkFITDtBQUlMQyw0QkFBa0I7QUFKYixTQUFELEVBS0g7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyxnQkFBTSxNQUZMO0FBR0RDLG9CQUFVLGtCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQUxHLEVBVUg7QUFDREgsb0JBQVUsYUFEVDtBQUVEQyxnQkFBTSxNQUZMO0FBR0RDLG9CQUFVLG1CQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQVZHLEVBZUg7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyxnQkFBTSxNQUZMO0FBR0RDLG9CQUFVLG9CQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQWZHO0FBSkE7QUFmRCxLQStDSztBQUFBLFVBSmRDLFVBSWMsR0FKRDtBQUNYQyxnQkFBVTtBQURDLEtBSUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGWTtBQUdiOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRUtDLEMsRUFBRztBQUNQLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWEgsZUFBS2QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJnQixJQUFJaEIsUUFBL0I7QUFDQVksZ0JBQU1BLEdBQUdJLElBQUloQixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUFqRjBCLGVBQUtpQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaG9tZScsXHJcbiAgICAgICdwYWdlcy9qb2luJyxcclxuICAgICAgJ3BhZ2VzL3dvcmtzJyxcclxuICAgICAgJ3BhZ2VzL21pbmUnLFxyXG4gICAgICAncGFnZXMvYWJvdXQnLFxyXG4gICAgICAncGFnZXMvaW5kZXgnXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICdwaW5rJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmYzBjYicsXHJcbiAgICAgIGNvbG9yOiAnI0ZGRjhEQycsXHJcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgbGlzdDogW3tcclxuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWUnLFxyXG4gICAgICAgIHRleHQ6ICfpppbpobUnLFxyXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZS9maXJzdG9uZS5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlL2ZpcnN0LnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvam9pbicsXHJcbiAgICAgICAgdGV4dDogJ+WPgui1m+WFpeWPoycsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlL2pvaW4ucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS9qb2lub25lLnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvd29ya3MnLFxyXG4gICAgICAgIHRleHQ6ICfkvZzlk4HlhaXlj6MnLFxyXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZS93b3Jrcy5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlL3dvcmtzb25lLnBuZydcclxuICAgICAgfSwge1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbWluZScsXHJcbiAgICAgICAgdGV4dDogJ+S4quS6uuS4u+mhtScsXHJcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlL3BlcnNvbi5wbmcnLFxyXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlL3BlcnNvbm9uZS5wbmcnXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB0aGlzLnRlc3RBc3luYygpXHJcbiAgfVxyXG5cclxuICBzbGVlcChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdEFzeW5jKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=