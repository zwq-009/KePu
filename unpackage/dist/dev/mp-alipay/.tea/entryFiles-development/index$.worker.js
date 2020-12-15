if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/zuj1/zuj1?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/zuj2/zuj2?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/zuj3/zuj3?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/zuj4/zuj4?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup?hash=b19dd0d6a9bd454954ae3c14da7d5cdd40447fb6');
require('../../components/share-btn/share-btn?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/zuj5/zuj5?hash=4ea5262a4b69f71cddb36ee781f4e68ae3060226');
require('../../components/zuj6/zuj6?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/zuj7/zuj7?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=a6955c59f03a5a90a45f7f84fb40b971852ef510');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/shoucang/shoucang?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/sorry/sorry?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/detail05/detail05?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/vdetail05/vdetail05?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}