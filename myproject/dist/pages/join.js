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
      items: [{ name: 'live', value: '生活：一组生活照片，反映生活感人的，激情的点滴瞬间。。。' }, { name: 'family', value: '亲情：人最重要的感情，和亲人一起的温馨的、甜蜜的照片。。。' }, { name: 'flyback', value: '回归：回归自然，自然风景的照片，当然照片中要有人，才算回归，和自然亲昵的照片，人始于自然，也将归与自然。' }, { name: 'wind', value: '风雨：人生必然经历风雨，怎样的风雨，如何经历风雨，风雨过后呢？' }],
      height: 0,
      width: 0,
      value: '',
      array: ['美国', '中国', '巴西', '日本'],
      objectArray: [{
        id: 0,
        name: '美国'
      }, {
        id: 1,
        name: '中国'
      }, {
        id: 2,
        name: '巴西'
      }, {
        id: 3,
        name: '日本'
      }]
    }, _this.methods = {
      radioChange: function radioChange(e) {
        var self = this;
        self.value = e.detail.value;
        console.log('radio发生change事件，携带value值为：', e.detail.value);
      },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4uanMiXSwibmFtZXMiOlsiSm9pbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicGx1cyIsIml0ZW1zIiwibmFtZSIsInZhbHVlIiwiaGVpZ2h0Iiwid2lkdGgiLCJhcnJheSIsIm9iamVjdEFycmF5IiwiaWQiLCJtZXRob2RzIiwicmFkaW9DaGFuZ2UiLCJlIiwic2VsZiIsImRldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJ0YXAiLCJsZW5ndGgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYXJyIiwicHVzaCIsInRlbXBGaWxlUGF0aHMiLCJzZXREYXRhIiwiYmluZFBpY2tlckNoYW5nZSIsImluZGV4IiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxZQUFNLG1CQUZEO0FBR0xDLGFBQU8sQ0FDTCxFQUFFQyxNQUFNLE1BQVIsRUFBZ0JDLE9BQU8sOEJBQXZCLEVBREssRUFFTCxFQUFFRCxNQUFNLFFBQVIsRUFBa0JDLE9BQU8sK0JBQXpCLEVBRkssRUFHTCxFQUFFRCxNQUFNLFNBQVIsRUFBbUJDLE9BQU8sc0RBQTFCLEVBSEssRUFJTCxFQUFFRCxNQUFNLE1BQVIsRUFBZ0JDLE9BQU8saUNBQXZCLEVBSkssQ0FIRjtBQVNMQyxjQUFRLENBVEg7QUFVTEMsYUFBTyxDQVZGO0FBV0xGLGFBQU8sRUFYRjtBQVlMRyxhQUFPLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBWkY7QUFhTEMsbUJBQWEsQ0FDWDtBQUNFQyxZQUFJLENBRE47QUFFRU4sY0FBTTtBQUZSLE9BRFcsRUFLWDtBQUNFTSxZQUFJLENBRE47QUFFRU4sY0FBTTtBQUZSLE9BTFcsRUFTWDtBQUNFTSxZQUFJLENBRE47QUFFRU4sY0FBTTtBQUZSLE9BVFcsRUFhWDtBQUNFTSxZQUFJLENBRE47QUFFRU4sY0FBTTtBQUZSLE9BYlc7QUFiUixLLFFBZ0NQTyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLENBREosRUFDTztBQUNiLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLVCxLQUFMLEdBQWFRLEVBQUVFLE1BQUYsQ0FBU1YsS0FBdEI7QUFDQVcsZ0JBQVFDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0osRUFBRUUsTUFBRixDQUFTVixLQUFuRDtBQUNELE9BTE87QUFNUmEsU0FOUSxpQkFNRjtBQUNKLFlBQUlKLE9BQU8sSUFBWDtBQUNBLFlBQUlBLEtBQUtiLEdBQUwsQ0FBU2tCLE1BQVQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxtQkFBTyxVQURNO0FBRWJDLGtCQUFNLFNBRk87QUFHYkMsc0JBQVU7QUFIRyxXQUFmO0FBS0E7QUFDRDtBQUNELHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFE7QUFFZkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLO0FBR2ZDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRztBQUlmQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJQyxNQUFNaEIsS0FBS2IsR0FBZjtBQUNBNkIsZ0JBQUlDLElBQUosQ0FBU0YsSUFBSUcsYUFBSixDQUFrQixDQUFsQixDQUFUO0FBQ0FsQixpQkFBS2IsR0FBTCxHQUFXNkIsR0FBWDtBQUNBaEIsaUJBQUttQixPQUFMLENBQWE7QUFDWGhDLG1CQUFLNkI7QUFETSxhQUFiO0FBR0Q7QUFYYyxTQUFqQjtBQWFELE9BN0JPO0FBOEJSSSxzQkE5QlEsNEJBOEJTckIsQ0E5QlQsRUE4Qlk7QUFDbEIsWUFBSUMsT0FBTyxJQUFYO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNKLEVBQUVFLE1BQUYsQ0FBU1YsS0FBMUM7QUFDQVMsYUFBS21CLE9BQUwsQ0FBYTtBQUNYRSxpQkFBT3RCLEVBQUVFLE1BQUYsQ0FBU1Y7QUFETCxTQUFiO0FBR0Q7QUFwQ08sSzs7Ozs7NkJBc0NEO0FBQ1AsVUFBSVMsT0FBTyxJQUFYO0FBQ0EscUJBQUtzQixhQUFMLENBQW1CO0FBQ2pCUixlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hmLGVBQUtSLE1BQUwsR0FBY3VCLElBQUlRLFlBQWxCO0FBQ0F2QixlQUFLUCxLQUFMLEdBQWFzQixJQUFJUyxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFsRitCLGVBQUtDLEk7O2tCQUFsQjFDLEkiLCJmaWxlIjoiam9pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvaW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeimgeWPgui1mydcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogW10sXG4gICAgcGx1czogJy4uL2ltYWdlL3BsdXMucG5nJyxcbiAgICBpdGVtczogW1xuICAgICAgeyBuYW1lOiAnbGl2ZScsIHZhbHVlOiAn55Sf5rS777ya5LiA57uE55Sf5rS754Wn54mH77yM5Y+N5pig55Sf5rS75oSf5Lq655qE77yM5r+A5oOF55qE54K55ru0556s6Ze044CC44CC44CCJyB9LFxuICAgICAgeyBuYW1lOiAnZmFtaWx5JywgdmFsdWU6ICfkurLmg4XvvJrkurrmnIDph43opoHnmoTmhJ/mg4XvvIzlkozkurLkurrkuIDotbfnmoTmuKnppqjnmoTjgIHnlJzonJznmoTnhafniYfjgILjgILjgIInIH0sXG4gICAgICB7IG5hbWU6ICdmbHliYWNrJywgdmFsdWU6ICflm57lvZLvvJrlm57lvZLoh6rnhLbvvIzoh6rnhLbpo47mma/nmoTnhafniYfvvIzlvZPnhLbnhafniYfkuK3opoHmnInkurrvvIzmiY3nrpflm57lvZLvvIzlkozoh6rnhLbkurLmmLXnmoTnhafniYfvvIzkurrlp4vkuo7oh6rnhLbvvIzkuZ/lsIblvZLkuI7oh6rnhLbjgIInIH0sXG4gICAgICB7IG5hbWU6ICd3aW5kJywgdmFsdWU6ICfpo47pm6jvvJrkurrnlJ/lv4XnhLbnu4/ljobpo47pm6jvvIzmgI7moLfnmoTpo47pm6jvvIzlpoLkvZXnu4/ljobpo47pm6jvvIzpo47pm6jov4flkI7lkaLvvJ8nIH1cbiAgICBdLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICB2YWx1ZTogJycsXG4gICAgYXJyYXk6IFsn576O5Zu9JywgJ+S4reWbvScsICflt7Topb8nLCAn5pel5pysJ10sXG4gICAgb2JqZWN0QXJyYXk6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICfnvo7lm70nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ+S4reWbvSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAn5be06KW/J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICfml6XmnKwnXG4gICAgICB9XG4gICAgXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgcmFkaW9DaGFuZ2UoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKCdyYWRpb+WPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcbiAgICB0YXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLnNyYy5sZW5ndGggPj0gMykge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmnIDlpJrpgInmi6nkuInlvKDnhafniYcnLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBsZXQgYXJyID0gc2VsZi5zcmNcbiAgICAgICAgICBhcnIucHVzaChyZXMudGVtcEZpbGVQYXRoc1swXSlcbiAgICAgICAgICBzZWxmLnNyYyA9IGFyclxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBzcmM6IGFyclxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kUGlja2VyQ2hhbmdlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgaW5kZXg6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19