
function getQuerystringValueByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var shuffleArray = function (array) {
    var m = array.length,
     t, i;
    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining elementâ€¦
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
try {
    var srchkey = getQuerystringValueByName("txtSearch")
    var ReqCtrlid = getQuerystringValueByName("ctrlid")
    if (srchkey == undefined) srchkey = '';
    var qid = getQuerystringValueByName('qid');
    if (qid == undefined) qid = '';
    var strCID = getQuerystringValueByName('cc');
    if (strCID == undefined) strCID = '';
    var strCtype = getQuerystringValueByName('ctype');
    if (strCtype == undefined) strCtype = '';
    var start = getQuerystringValueByName('start');
    var sofferid = getQuerystringValueByName('offerid');
    var otype = getQuerystringValueByName('otype');
    var slang = getQuerystringValueByName("lang");
    if (slang == undefined) slang = '';
    var hdnmob = document.getElementById("hdnmob").value;
    if (hdnmob == undefined) hdnmob = '';
} catch (ex) { }

function BindingNotifications($scope, Factory, UtilityObject, $http) {
    $scope.CreateNotifications = Facatory.CreateNotifications(UtilityObject);
    $scope.NotificationsData = []; //List of ExclusiveData
    $scope.utility = UtilityObject;
}

function BindingCode($scope, Factory, UtilityObject, $http) {
    $scope.CreateExclusive = Facatory.CreateExclusiveForYou(UtilityObject);
    $scope.ExclusiveData = []; //List of ExclusiveData
    $scope.utility = UtilityObject;
}

function BindingCodeMORE($scope, Factory, UtilityObject, $http) {
    $scope.CreateExclusiveMORE = Facatory.CreateExclusiveMORE(UtilityObject);
    $scope.ExclusiveDataMORE = []; //List of ExclusiveData
    $scope.utility = UtilityObject;
}

function BindingCodeMORESUB($scope, Factory, UtilityObject, $http) {
    $scope.CreateExclusiveMORESUB = Facatory.CreateExclusiveMORESUB(UtilityObject);
    $scope.ExclusiveDataMORESUB = [];
    $scope.utility = UtilityObject;
}

function BindingCodeMOREONE($scope, Factory, UtilityObject, $http) {
    $scope.CreateExclusiveMOREONE = Facatory.CreateExclusiveMOREONE(UtilityObject);
    $scope.ExclusiveDataMOREONE = []; //List of ExclusiveData
    $scope.utility = UtilityObject;
}

function BindingDataAlerts($scope, Factory, UtilityObject, $http) {
    $scope.CreateDataAlerts = Facatory.CreateDataAlerts(UtilityObject);
    $scope.DataAlertsData = []; //List of ExclusiveData
    $scope.utility = UtilityObject;
}

function BindingGamesDataAlerts($scope, Factory, UtilityObject, $http) {
    $scope.CreateGamesDataAlerts = Facatory.CreateGamesDataAlerts(UtilityObject);
    $scope.GamesDataAlertsData = []; //List of ExclusiveData
    $scope.utility = UtilityObject;
}

function BindingMusic($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusic = Facatory.CreateMusic(UtilityObject);
    $scope.MusicData = []; //List of MusicData
    $scope.utility = UtilityObject;
}
//Music template 
function BindingMusicOne($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicone = Facatory.CreateMusicone(UtilityObject);
    $scope.MusicDataOne = []; //List of MusicData
    $scope.utility = UtilityObject;
}
//Music template 
function BindingMusicTwo($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusictwo = Facatory.CreateMusictwo(UtilityObject);
    $scope.MusicDataTwo = []; //List of MusicData
    $scope.utility = UtilityObject;
}

function BindingMusicThree($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicthree = Facatory.CreateMusicthree(UtilityObject);
    $scope.MusicDataThree = []; //List of MusicData
    $scope.utility = UtilityObject;
}

function BindingMusicFour($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicfour = Facatory.CreateMusicfour(UtilityObject);
    $scope.MusicDataFour = []; //List of MusicData
    $scope.utility = UtilityObject;
}

function BindingMusicFive($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicfive = Facatory.CreateMusicfive(UtilityObject);
    $scope.MusicDataFive = []; //List of MusicData
    $scope.utility = UtilityObject;
}

function BindingMusicSix($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicSix = Facatory.CreateMusicSix(UtilityObject);
    $scope.MusicDataSix = []; //List of MusicData
    $scope.utility = UtilityObject;
}

function BindingMusicSeven($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicSeven = Facatory.CreateMusicSeven(UtilityObject);
    $scope.MusicDataSeven = []; //List of MusicData
    $scope.utility = UtilityObject;
}

function BindingMusicEight($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicEight = Facatory.CreateMusicEight(UtilityObject);
    $scope.MusicDataEight = []; //List of MusicData
    $scope.utility = UtilityObject;
}

function BindingMusicNine($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicNine = Facatory.CreateMusicNine(UtilityObject);
    $scope.MusicDataNine = []; //List of MusicData
    $scope.utility = UtilityObject;
}

function BindingMusicTen($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicTen = Facatory.CreateMusicTen(UtilityObject);
    $scope.MusicDataTen = []; //List of MusicData
    $scope.utility = UtilityObject;
}

function BindingWallpaper($scope, Factory, UtilityObject, $http) {
    $scope.CreateWallpaper = Factory.CreateWallpaper(UtilityObject);
    $scope.WallpaperData = []; //List oF WallpaperData
    $scope.utility = UtilityObject;
}

function BindingCarousalOne($scope, Factory, UtilityObject, $http) {
    $scope.CreateCarousalOne = Factory.CreateCarousalOne(UtilityObject);
    $scope.CarousalOneData = []; //List oF WallpaperData
    $scope.utility = UtilityObject;
}

function BindingCarousalTwo($scope, Factory, UtilityObject, $http) {
    $scope.CreateCarousalTwo = Factory.CreateCarousalTwo(UtilityObject);
    $scope.CarousalTwoData = []; //List oF WallpaperData
    $scope.utility = UtilityObject;
}

function BindingVideos($scope, Factory, UtilityObject, $http) {
    $scope.CreateVideos = Factory.CreateVideos(UtilityObject);
    $scope.VideosData = []; //List of Videos
    $scope.utility = UtilityObject;
}

function BindingFullVideos($scope, Factory, UtilityObject, $http) {
    $scope.CreateFullVideos = Factory.CreateFullVideos(UtilityObject);
    $scope.FullVideosData = []; //List of FullVideos
    $scope.utility = UtilityObject;
}

function BindingMusicBundel($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicBundle = Factory.CreateMusicBundle(UtilityObject);
    $scope.MusicBundleData = []; //List of Videos
    $scope.utility = UtilityObject;
}

function BindingSimilar($scope, Factory, UtilityObject, $http) {
    $scope.CreateSimilar = Factory.CreateSimilar(UtilityObject);
    $scope.SimilarData = []; //List of Videos
    $scope.utility = UtilityObject;
}

function BindingBundle($scope, Factory, UtilityObject, $http) {
    $scope.CreateBundle = Factory.CreateBundle(UtilityObject);
    $scope.BundleData = []; //List of Bundles
    $scope.utility = UtilityObject;
}
/*function BindingComments($scope, Factory, UtilityObject, $http) {
    $scope.CreateGetComments = Factory.CreateGetComments(UtilityObject);
    $scope.CommentsData = []; //List of Comments
    $scope.utility = UtilityObject;
} */
function BindSearchResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateSearchResults = Factory.CreateSearchResults(UtilityObject);
    $scope.SearchResultsMusicData = []; //List of SearchMusic
    // $scope.SearchResultsWallData = [];
    $scope.utility = UtilityObject;
}

function BindingMusicPaging($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPaging = Factory.CreateMusicPaging(UtilityObject);
    $scope.MusicDataPaging = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingOne($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingOne = Factory.CreateMusicPagingOne(UtilityObject);
    $scope.MusicDataPagingOne = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingTwo($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingTwo = Factory.CreateMusicPagingTwo(UtilityObject);
    $scope.MusicDataPagingTwo = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingThree($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingThree = Factory.CreateMusicPagingThree(UtilityObject);
    $scope.MusicDataPagingThree = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingFour($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingFour = Factory.CreateMusicPagingFour(UtilityObject);
    $scope.MusicDataPagingFour = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingFive($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingFive = Factory.CreateMusicPagingFive(UtilityObject);
    $scope.MusicDataPagingFive = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingSix($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingSix = Factory.CreateMusicPagingSix(UtilityObject);
    $scope.MusicDataPagingSix = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingSeven($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingSeven = Factory.CreateMusicPagingSeven(UtilityObject);
    $scope.MusicDataPagingSeven = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingEight($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingEight = Factory.CreateMusicPagingEight(UtilityObject);
    $scope.MusicDataPagingEight = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingNine($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingNine = Factory.CreateMusicPagingNine(UtilityObject);
    $scope.MusicDataPagingNine = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindingMusicPagingTen($scope, Factory, UtilityObject, $http) {
    $scope.CreateMusicPagingTen = Factory.CreateMusicPagingTen(UtilityObject);
    $scope.MusicDataPagingTen = []; //List of SearchMusic
    $scope.utility = UtilityObject;
}

function BindSearchWallResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateSearchWallResults = Factory.CreateSearchWallResults(UtilityObject);
    $scope.SearchResultsWallData = []; //List of SearchWall
    $scope.utility = UtilityObject;
}

function BindSearchGamesResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateSearchGamesResults = Factory.CreateSearchGamesResults(UtilityObject);
    $scope.SearchResultsGamesData = []; //List of SearchGames
    $scope.utility = UtilityObject;
}

function BindSearchVideoResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateSearchVideoResults = Factory.CreateSearchVideoResults(UtilityObject);
    $scope.SearchResultsVideoData = []; //List of SearchWall
    $scope.utility = UtilityObject;
}

function BindSearchFullVideoResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateSearchVideoResults = Factory.CreateSearchVideoResults(UtilityObject);
    $scope.SearchResultsVideoData = []; //List of SearchWall
    $scope.utility = UtilityObject;
}

function BindDownloadMusicResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateDownloadMusicResults = Factory.DownloadMusicResults(UtilityObject);
    $scope.DownloadMusicResultsData = []; //List of Download result
    $scope.utility = UtilityObject;
}

function BindDownloadGamesResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateDownloadGamesResults = Factory.DownloadGamesResults(UtilityObject);
    $scope.DownloadGamesResultsData = []; //List of Download result
    $scope.utility = UtilityObject;
}

function BindDownloadWallResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateDownloadWallResults = Factory.DownloadWallResults(UtilityObject);
    $scope.DownloadWallResultsData = []; //List of Download result
    $scope.utility = UtilityObject;
}

function BindDownloadVideoResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateDownloadVideoResults = Factory.DownloadVideoResults(UtilityObject);
    $scope.DownloadVideoResultsData = []; //List of Download result
    $scope.utility = UtilityObject;
}

function BindDownloadFullVideoResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateDownloadFullVideoResults = Factory.DownloadFullVideoResults(UtilityObject);
    $scope.DownloadFullVideoResultsData = [];
    $scope.utility = UtilityObject;
}

function BindDownloadSubscriptionResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateDownloadSubscriptionResults = Factory.DownloadMusicResults(UtilityObject);
    $scope.DownloadMusicSubscriptionResultsData = []; //List of Subscription results
    $scope.utility = UtilityObject;
}

function BindWhishlistResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateWishlistResults = Factory.WishlistResults(UtilityObject);
    $scope.WhishlistResultsData = []; //List of Subscription results
    $scope.utility = UtilityObject;
}

function BindWhishlistGamesResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateWishlistGamesResults = Factory.WishlistGamesResults(UtilityObject);
    $scope.WishlistGamesResultsData = []; //List of Subscription results
    $scope.utility = UtilityObject;
}

function BindWhishlistWallResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateWishlistWallResults = Factory.WishlistWallResults(UtilityObject);
    $scope.WishlistWallResultsData = []; //List of Subscription results
    $scope.utility = UtilityObject;
}

function BindWhishlistVideoResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateWishlistVideoResults = Factory.WishlistVideoResults(UtilityObject);
    $scope.WishlistVideoResultsData = []; //List of Subscription results
    $scope.utility = UtilityObject;
}
//Viewed content
function BindViewedContentResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateViewedContentResults = Factory.ViewedContentResults(UtilityObject);
    $scope.ViewedContentResultsData = []; //List of ViewedContent results
    $scope.utility = UtilityObject;
}

function BindViewedGamesResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateViewedGamesResults = Factory.ViewedGamesResults(UtilityObject);
    $scope.ViewedGamesResultsData = []; //List of ViewedContent result
    $scope.utility = UtilityObject;
}

function BindViewedWallResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateViewedWallResults = Factory.ViewedWallResults(UtilityObject);
    $scope.ViewedWallResultsData = []; //List of Download result
    $scope.utility = UtilityObject;
}

function BindViewedVideoResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateViewedVideoResults = Factory.ViewedVideoResults(UtilityObject);
    $scope.ViewedVideoResultsData = []; //List of ViewedContent result
    $scope.utility = UtilityObject;
}
//PlayedContent
function BindPlayedContentResults($scope, Factory, UtilityObject, $http) {
    $scope.CreatePlayedContentResults = Factory.PlayedContentResults(UtilityObject);
    $scope.PlayedContentResultsData = []; //List of PlayedContent results
    $scope.utility = UtilityObject;
}

function BindPlayedGamesResults($scope, Factory, UtilityObject, $http) {
    $scope.CreatePlayedGamesResults = Factory.PlayedGamesResults(UtilityObject);
    $scope.PlayedGamesResultsData = []; //List of PlayedContent results
    $scope.utility = UtilityObject;
}

function BindPlayedWallResults($scope, Factory, UtilityObject, $http) {
    $scope.CreatePlayedWallResults = Factory.PlayedWallResults(UtilityObject);
    $scope.PlayedWallResultsData = []; //List of PlayedContent results
    $scope.utility = UtilityObject;
}

function BindPlayedVideoResults($scope, Factory, UtilityObject, $http) {
    $scope.CreatePlayedVideoResults = Factory.PlayedVideoResults(UtilityObject);
    $scope.PlayedVideoResultsData = []; //List of PlayedContent results
    $scope.utility = UtilityObject;
}
//Shared Content
function BindSharedContentResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateSharedContentResults = Factory.SharedContentResults(UtilityObject);
    $scope.SharedContentResultsData = []; //List of SharedContent results
    $scope.utility = UtilityObject;
}
//UserBundle Content
function BindUserBundleresults($scope, Factory, UtilityObject, $http) {
    $scope.UserBundleContentResultsData = []; //List of UserBundle results
    $scope.utility = UtilityObject;
}

function BindSharedGamesResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateSharedGamesResults = Factory.SharedGamesResults(UtilityObject);
    $scope.SharedGamesResultsData = []; //List of SharedContent results
    $scope.utility = UtilityObject;
}

function BindSharedWallResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateSharedWallResults = Factory.SharedWallResults(UtilityObject);
    $scope.SharedWallResultsData = []; //List of SharedContent results
    $scope.utility = UtilityObject;
}

function BindSharedVideoResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateSharedVideoResults = Factory.SharedVideoResults(UtilityObject);
    $scope.SharedVideoResultsData = []; //List of SharedContent results
    $scope.utility = UtilityObject;
}
//Favourite Content
function BindFavouriteResults($scope, Factory, UtilityObject, $http) {
    $scope.CreateFavouriteResults = Factory.FavouriteResults(UtilityObject);
    $scope.FavouriteResultsData = []; //List of SharedContent results
    $scope.utility = UtilityObject;
}
/*
function BindingAutoSuggest($scope, Factory, UtilityObject, $http) {
    //$scope.CreateSharedVideoResults = Factory.SharedVideoResults(UtilityObject);
    $scope.AutoSuggestData = []; //List of SharedContent results
    $scope.utility = UtilityObject;
}
*/
var myApp = angular.module("myApp", ['angularUtils.directives.dirPagination']);
myApp.controller("BindingNotifications", BindingNotifications);
myApp.controller("BindingCode", BindingCode);
myApp.controller("BindingCodeMORE", BindingCodeMORE);
myApp.controller("BindingCodeMORESUB", BindingCodeMORESUB);
myApp.controller("BindingCodeMOREONE", BindingCodeMOREONE);
myApp.controller("BindingDataAlerts", BindingDataAlerts);
myApp.controller("BindingGamesDataAlerts", BindingGamesDataAlerts);
myApp.controller("BindingMusic", BindingMusic);
myApp.controller("BindingMusicOne", BindingMusicOne);
myApp.controller("BindingMusicTwo", BindingMusicTwo);
myApp.controller("BindingMusicThree", BindingMusicThree);
myApp.controller("BindingMusicFour", BindingMusicFour);
myApp.controller("BindingMusicFive", BindingMusicFive);
myApp.controller("BindingMusicSix", BindingMusicSix);
myApp.controller("BindingMusicSeven", BindingMusicSeven);
myApp.controller("BindingMusicEight", BindingMusicEight);
myApp.controller("BindingMusicNine", BindingMusicNine);
myApp.controller("BindingMusicTen", BindingMusicTen);
myApp.controller("BindingWallpaper", BindingWallpaper);
myApp.controller("BindingCarousalOne", BindingCarousalOne);
myApp.controller("BindingCarousalTwo", BindingCarousalTwo);
myApp.controller("BindingVideos", BindingVideos);
myApp.controller("BindingFullVideos", BindingFullVideos);
myApp.controller("BindingMusicBundel", BindingMusicBundel);
myApp.controller("BindingSimilar", BindingSimilar);
myApp.controller("BindingBundle", BindingBundle);
//myApp.controller("BindingComments", BindingComments);
myApp.controller("BindSearchResults", BindSearchResults);
myApp.controller("BindSearchWallResults", BindSearchWallResults);
myApp.controller("BindSearchGamesResults", BindSearchGamesResults);
myApp.controller("BindSearchVideoResults", BindSearchVideoResults);
myApp.controller("BindSearchFullVideoResults", BindSearchFullVideoResults);
myApp.controller("BindDownloadMusicResults", BindDownloadMusicResults);
myApp.controller("BindDownloadGamesResults", BindDownloadGamesResults);
myApp.controller("BindDownloadWallResults", BindDownloadWallResults);
myApp.controller("BindDownloadVideoResults", BindDownloadVideoResults);
myApp.controller("BindDownloadFullVideoResults", BindDownloadFullVideoResults);
myApp.controller("BindDownloadSubscriptionResults", BindDownloadSubscriptionResults);
myApp.controller("BindWhishlistResults", BindWhishlistResults);
myApp.controller("BindWhishlistGamesResults", BindWhishlistGamesResults);
myApp.controller("BindWhishlistWallResults", BindWhishlistWallResults);
myApp.controller("BindWhishlistVideoResults", BindWhishlistVideoResults);
myApp.controller("BindViewedContentResults", BindViewedContentResults);
myApp.controller("BindViewedGamesResults", BindViewedGamesResults);
myApp.controller("BindViewedWallResults", BindViewedWallResults);
myApp.controller("BindViewedVideoResults", BindViewedVideoResults);
myApp.controller("BindPlayedContentResults", BindPlayedContentResults);
myApp.controller("BindPlayedGamesResults", BindPlayedGamesResults);
myApp.controller("BindPlayedWallResults", BindPlayedWallResults);
myApp.controller("BindPlayedVideoResults", BindPlayedVideoResults);
myApp.controller("BindSharedContentResults", BindSharedContentResults);
myApp.controller("BindUserBundleresults", BindUserBundleresults);
myApp.controller("BindSharedGamesResults", BindSharedGamesResults);
myApp.controller("BindSharedWallResults", BindSharedWallResults);
myApp.controller("BindSharedVideoResults", BindSharedVideoResults);
myApp.controller("BindingMusicPaging", BindingMusicPaging);
myApp.controller("BindingMusicPagingOne", BindingMusicPagingOne);
myApp.controller("BindingMusicPagingTwo", BindingMusicPagingTwo);
myApp.controller("BindingMusicPagingThree", BindingMusicPagingThree);
myApp.controller("BindingMusicPagingFour", BindingMusicPagingFour);
myApp.controller("BindingMusicPagingFive", BindingMusicPagingFive);
myApp.controller("BindingMusicPagingSix", BindingMusicPagingSix);
myApp.controller("BindingMusicPagingSeven", BindingMusicPagingSeven);
myApp.controller("BindingMusicPagingEight", BindingMusicPagingEight);
myApp.controller("BindingMusicPagingNine", BindingMusicPagingNine);
myApp.controller("BindingMusicPagingTen", BindingMusicPagingTen);
myApp.controller("BindFavouriteResults", BindFavouriteResults);
//myApp.controller("BindingAutoSuggest", BindingAutoSuggest);
myApp.factory("Factory", Factory);
myApp.service("UtilityObject", Utility);

myApp.directive('onfinishrender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});

myApp.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',

        link: function (scope, elm, attrs) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attrs.broadcasteventname ? attrs.broadcasteventname : 'ngRepeatFinished');
                });
            }
        }
    };
});

myApp.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers['X-IMI-LOGINID'] = '0';
            config.headers['X-IMI-OSVERSIONID'] = $('#hdndeviceid').val();
            config.headers['X-IMI-OSVERSION'] = $('#hdnmodel').val();
            config.headers['ServiceKey'] = 'g42ag97g8c914994b51cf892a15e7ef91235';
            return config;
        }
    };
});
myApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});
/*
myApp.controller('BindingNotifications', function ($scope, $http) {
    $http.get("http://www.mtnplay.com.af/portal/json.txt")
  .then(function (response) {
      // alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
      $scope.NotificationsData = response.data.ROOT.NOTIFICATIONS;
  });
});
*/
myApp.controller('BindingCode', function ($scope, $http) {
    var hdnsecid_Exclusive = document.getElementById("hdnsecid_Exclusive").value;
    var hdnevent_Exclusive = document.getElementById("hdnevent_Exclusive").value;
    var hdnpsize_Exclusive = document.getElementById("hdnpsize_Exclusive").value;
    //resp=advanced
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_Exclusive + "&sid=" + hdnsecid_Exclusive + "&resp=full&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_Exclusive)
     .then(function (results) {
         //  alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
         /* if (response.data.ROOT.STATUS.toString() == "-1") {
          }
          else if (response.data.ROOT.SECTION.GALLERY.TOTAL.toString() != "0") {
              $scope.ExclusiveData = response.data.ROOT.SECTION.GALLERY.CONTENT;
              $scope.TITLE = response.data.ROOT.SECTION.TITLE;
              setTimeout(function () {
                  $("#owl-demo").owlCarousel({
                      items: 4,
                      lazyLoad: true,
                      navigation: false
                  });
              }, 2000);
          }
           */
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("ExclusiveScreen").setAttribute("style", "display:none");
         } else {
             $scope.ExclusiveData = results.data.response.docs;
             $scope.totalItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
             setTimeout(function () {
                 $("#owl-demo").owlCarousel({
                     items: 4,
                     lazyLoad: true,
                     navigation: false
                 });
             }, 500);
         }
     });
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
// PAGING PRUPOSE
myApp.controller('BindingCodeMORE', function ($scope, $http) {
    var hdnsecid_Exclusive = document.getElementById("hdnsecid_Exclusive").value;
    var hdnevent_Exclusive = document.getElementById("hdnevent_Exclusive").value;
    var hdnpsize_Exclusive = document.getElementById("hdnpsize_Exclusive").value;
    //alert('testing');
    $scope.ExclusiveDataMORE = [];
    $scope.itemsPerPage = 2;
    $scope.totalItems = 0;
    BindingCodeMOREpage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.BindingCodeMOREpageChange = function (newPage) {
        BindingCodeMOREpage(newPage);
    };

    function BindingCodeMOREpage(pageNumber) {
        var surl = "";
        var event = getQuerystringValueByName('event');
        if (strCtype == "SUB") {
            surl = "./pageapi.aspx?typxm=" + hdnevent_Dataalerts + "&sid=" + hdnsecid_Exclusive + "&oresp=json&jf=t&chn=wap&qid=" + qid + '&lang=' + slang;
        } else {
            //surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&tot=T&event=&ctrlid=" + ReqCtrlid + "&resp=advanced&start=3&qid=" + qid + "&psize=" + hdnpsize_Exclusive;	  
            //surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&tot=T&event=&ctrlid=" + ReqCtrlid + "&resp=advanced&start="+ pageNumber +"&qid=" + qid + "&psize=" + hdnpsize_Exclusive;
            pageNumber = pageNumber + 1;
            surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + event + "&sid=" + ReqCtrlid + "&resp=advanced&qid=" + qid + '&lang=' + slang + "&psize=2&pnumber=" + pageNumber; // + "&tot=T";
        }
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("ExclusiveScreen").setAttribute("style", "display:none");
             } else {
                 $scope.ExclusiveDataMORE = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
             }
         });
    }
});
// PAGING PRUPOSE
myApp.controller('BindingCodeMORESUB', function ($scope, $http) {
    var hdnsecid_Sub = document.getElementById("hdnsecid_Sub").value;
    var hdnevent_Sub = document.getElementById("hdnevent_Sub").value;
    var hdnpsize_Sub = document.getElementById("hdnpsize_Sub").value;
    var homedataalert = getQuerystringValueByName('h');
    //alert('testing');
    $scope.ExclusiveDataMORESUB = [];
    $scope.itemsPerPage = 2;
    $scope.totalItems = 0;
    BindingCodeMORESUBpage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.BindingCodeMORESUBpageChange = function (newPage) {
        BindingCodeMORESUBpage(newPage);
    };

    function BindingCodeMORESUBpage(pageNumber) {
        var surl = "";
        var event = getQuerystringValueByName('event');
        pageNumber = pageNumber + 1;
        surl = "./pageapi.aspx?typxm=" + hdnevent_Sub + "&chn=wap&sid=" + hdnsecid_Sub + "&oresp=json&jf=t&qid=" + qid + "&lang=" + slang + "&pno=" + pageNumber + "psize=" + hdnpsize_Sub + "event=" + hdnevent_Sub;
        if (homedataalert == "T") {
            surl = "./pageapi.aspx?typxm=&sid=" + ReqCtrlid + "&chn=wap&oresp=json&jf=t&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_Sub + "&pno=" + pageNumber;
        }
        $http.get(surl)
         .then(function (results) {
             if (results.data.ROOT.STATUS.toString() == "-1") { } else if (results.data.ROOT.SECTION.GALLERY.TOTAL.toString() != "0") {
                 $scope.ExclusiveDataMORESUB = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.TITLE = results.data.ROOT.SECTION.TITLE;
                 $scope.totalItems = results.data.ROOT.SECTION.GALLERY.TOTAL;
                 setTimeout(function () {
                     $("#owl-demo1").owlCarousel({
                         items: 4,
                         lazyLoad: true,
                         navigation: false
                     });
                     DataaletsToggelids();
                     $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
                         //alert('testing');
                     });
                 }, 2000);
             }
         });
    }
});
/* NO PAGING 
myApp.controller('BindingCodeMORE', function ($scope, $http) {
    var hdnsecid_Exclusive = document.getElementById("hdnsecid_Exclusive").value;
    var hdnevent_Exclusive = document.getElementById("hdnevent_Exclusive").value;
	var hdnpsize_Exclusive = document.getElementById("hdnpsize_Exclusive").value;
		// + "&psize=" + hdnpsize_Exclusive)
			  var surl = "";
	if(strCtype == "SUB")
	{
	  ReqCtrlid = "12072016095441";
	  surl = "./pageapi.aspx?typxm=&sid=" + ReqCtrlid + "&oresp=json&jf=t&qid=" + qid;
	}
	else
	{
	  surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&tot=T&event=&ctrlid=" + ReqCtrlid + "&resp=advanced&start=3&qid=" + qid;
	}
      $http.get(surl)
            .then(function (results) {
                //  alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
				  var count = results.data.response.numFound;
                  if (count == undefined) count = '';
                  if (count == '' || count == '0') {
                      document.getElementById("ExclusiveScreen").setAttribute("style", "display:none");
                  }
                  else {
                      $scope.ExclusiveDataMORE = results.data.response.docs;
                      $scope.totalItems = results.data.response.numFound;
					  $scope.TITLE = results.data.response.title;
                  }
            });
});
*/
myApp.controller('BindingCodeMOREONE', function ($scope, $http) {
    var hdnsecid_Exclusiveone = document.getElementById("hdnsecid_Exclusiveone").value;
    var hdnevent_Exclusiveone = document.getElementById("hdnevent_Exclusiveone").value;
    var hdnpsize_Exclusiveone = document.getElementById("hdnpsize_Exclusiveone").value;
    // + "&psize=" + hdnpsize_Exclusive)
    var surl = "";
    if (strCtype == "SUB") {
        ReqCtrlid = "12072016095441";
        surl = "./pageapi.aspx?typxm=&sid=" + ReqCtrlid + "&oresp=json&jf=t&chn=wap&qid=" + qid + "&lang=" + slang;
    } else {
        surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&tot=T&event=&ctrlid=" + ReqCtrlid + "&resp=advanced&start=3&chn=wap&qid=" + qid + "&lang=" + slang;
    }
    $http.get(surl)
     .then(function (results) {
         //  alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("ExclusiveScreenONE").setAttribute("style", "display:none");
         } else {
             $scope.ExclusiveDataMOREONE = results.data.response.docs;
             $scope.totalItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
         }
     });
});
myApp.controller('BindingDataAlerts', function ($scope, $http) {
    var hdnsecid_Dataalerts = document.getElementById("hdnsecid_Dataalerts").value;
    var hdnevent_Dataalerts = document.getElementById("hdnevent_Dataalerts").value;
    var hdnpsize_Dataalerts = document.getElementById("hdnpsize_Dataalerts").value;
    var hdnrnd_Dataalerts = document.getElementById("hdnrnd_Dataalerts").value;
    //var sUrl = "./pageapi.aspx?typxm=" + hdnevent_Dataalerts + "&chn=wap&sid=" + hdnsecid_Dataalerts + "&oresp=json&jf=t&qid=" + qid + "&psize=" + hdnpsize_Dataalerts
    var sUrl = "./pageapi.aspx?typxm=" + hdnevent_Dataalerts + "&chn=wap&sid=" + hdnsecid_Dataalerts + "&oresp=json&jf=t&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_Dataalerts
    $http.get(sUrl).then(function (response) {
        if (response.data.ROOT.STATUS.toString() == "-1") {
            //response.data.ROOT.SECTION.GALLERY.TOTAL.toString		   
        } else if (response.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
            var datacount = response.data.ROOT.SECTION.GALLERY.CONTENT.length;
            if (datacount == undefined) datacount = 1;
            if (parseInt(datacount) == 1) {
                var datan = [];
                datan.push(response.data.ROOT.SECTION.GALLERY.CONTENT);
                $scope.DataAlertsData = datan;
            } else {
                var objdata = response.data.ROOT.SECTION.GALLERY.CONTENT;
                try {
                    if (hdnrnd_Dataalerts == 'T')
                        shuffleArray(objdata);
                } catch (ex) { }
                $scope.DataAlertsData = objdata;
            }
            //$scope.DataAlertsData = response.data.ROOT.SECTION.GALLERY.CONTENT;
            $scope.TITLE = response.data.ROOT.SECTION.TITLE;
            //                 setTimeout(function () {
            //                     $("#owl-demo1").owlCarousel({
            //                         items: 4,
            //                         lazyLoad: true,
            //                         navigation: false
            //                     });
            //                     DataaletsToggelids();
            //                     $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            //                         //alert('testing');
            //                     });
            //                 }, 2000);
        }
    });
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        $("#owl-demo1").owlCarousel({
            items: 4,
            lazyLoad: true,
            navigation: false
        });
    });
});

function DataaletsToggelids() {
    try {
        $("#capslide_img_cont1").capslide({
            caption_color: '000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#832EA5',
            border: '0px solid #ccc',
            showcaption: true
        });
        $("#capslide_img_cont2").capslide({
            caption_color: '000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#832EA5',
            border: '0px solid #ccc',
            showcaption: true
        });
        $("#capslide_img_cont3").capslide({
            caption_color: '000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#832EA5',
            border: '0px solid #ccc',
            showcaption: true
        });
        $("#capslide_img_cont4").capslide({
            caption_color: '000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#832EA5',
            border: '0px solid #ccc',
            showcaption: true
        });
        $("#capslide_img_cont5").capslide({
            caption_color: '000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#832EA5',
            border: '0px solid #ccc',
            showcaption: true
        });
        $("#capslide_img_cont6").capslide({
            caption_color: '000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#832EA5',
            border: '0px solid #ccc',
            showcaption: true
        });
        $("#capslide_img_cont7").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#549360',
            border: '0px solid #549360',
            showcaption: true
        });
        $("#capslide_img_cont8").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#d13f68',
            border: '0px solid #d13f68',
            showcaption: true
        });
        $("#capslide_img_cont9").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont10").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont11").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont12").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont13").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont14").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont15").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont16").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont17").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont18").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont19").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont20").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont21").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont22").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont23").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont24").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont25").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
        $("#capslide_img_cont26").capslide({
            caption_color: '#000000',
            caption_bgcolor: '#b48601',
            overlay_bgcolor: '#3fa6d1',
            border: '0px solid #3fa6d1',
            showcaption: true
        });
    } catch (e) { }
}
myApp.controller('BindingGamesDataAlerts', function ($scope, $http) {
    var hdnsecid_GamesDataalerts = document.getElementById("hdnsecid_GamesDataalerts").value;
    var hdnevent_GamesDataalerts = document.getElementById("hdnevent_GamesDataalerts").value;
    var hdnpsize_GamesDataalerts = document.getElementById("hdnpsize_GamesDataalerts").value;
    //resp=advanced
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_GamesDataalerts + "&sid=" + hdnsecid_GamesDataalerts + "&chn=wap&resp=full&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_GamesDataalerts)
     .then(function (results) {
         //  alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
         if (results.data.response == undefined) {
             document.getElementById("DatalertsGamesScreen").setAttribute("style", "display:none");
         } else {
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("DatalertsGamesScreen").setAttribute("style", "display:none");
             } else {
                 $scope.GamesDataAlertsData = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
                 setTimeout(function () {
                     $("#owl-demo5").owlCarousel({
                         items: 4,
                         lazyLoad: true,
                         navigation: false
                     });
                     DataaletsToggelids();
                     $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
                         //alert('testing');
                     });
                 }, 2000);
             }
         }
     });
});
myApp.controller('BindingMusicPaging', function ($scope, $http) {
    var hdnsecid_Musicpaging = document.getElementById("hdnsecid_Musicpaging").value;
    var hdnevent_Musicpaging = document.getElementById("hdnevent_Musicpaging").value;
    var maxscore = "";
    //alert('testing');
    $scope.MusicDataPaging = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageChangedMusic = function (newPage) {
        getMusicPage(newPage);
    };

    function getMusicPage(pageNumber) {
        //alert($scope.maxscore)
        /*if($scope.maxscore != undefined)
        {
          maxscore = parseInt($scope.maxscore) + 1;
        }
        */
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_Musicpaging + "&sid=" + hdnsecid_Musicpaging + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang; // + "&start=" + maxscore;
        /*
        if(hdnevent_Musicpaging.toUpperCase() == 'TRENDING' || hdnevent_Musicpaging.toUpperCase() == 'RECOMMENDATIONS' || hdnevent_Musicpaging.toUpperCase() == 'MTNSHORTZ') {
            surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_Musicpaging + "&sid=" + hdnsecid_Musicpaging + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid;// + "&start=" + maxscore;
        }
        */
        //alert(surl);
        $http.get(surl)
         .then(function (results) {
             if (results.data.response == undefined) {
                 document.getElementById("MusicScreen").setAttribute("style", "display:none");
             } else {
                 var count = results.data.response.numFound;
                 //var count = results.data.response.total;
                 var sectionCattyep = results.data.response.cattype;
                 var SectionImage = GetSectionImage(sectionCattyep);
                 $scope.SECTIONIMG = SectionImage;
                 $scope.maxscore = results.data.response.maxScore;
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     document.getElementById("MusicScreen").setAttribute("style", "display:none");
                 } else {
                     $scope.MusicDataPaging = results.data.response.docs;
                     $scope.totalItems = results.data.response.numFound;
                     //$scope.totalItems = results.data.response.total;
                     $scope.TITLE = results.data.response.title;
                     try {
                         var avcredits = $('#hdncredits').val();
                         if (avcredits == undefined) avcredits = '0';
                         if (parseInt(avcredits) > 0) {
                             $.each($scope.MusicDataPaging, function (i, item) {
                                 item.price.downloadprice = '0.0';
                             });
                         }
                     } catch (excredits) { }
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});

function GetSectionImage(strCtype) {
    var imgsrc = "";
    if (strCtype == "FS") {
        imgsrc = "images/music-icon.png";
    } else if (strCtype == "U") {
        imgsrc = "images/music-icon.png";
    } else if (strCtype == "I") {
        imgsrc = "images/wallpapers-icons.png";
    } else if (strCtype == "V" || strCtype == "FV") {
        imgsrc = "images/video-icon.png";
    } else if (strCtype == "AP") {
        imgsrc = "images/games-icon.png";
    } else if (strCtype == "G") {
        imgsrc = "images/games-icon1.png";
    } else if (strCtype == "SUB") {
        imgsrc = "images/message-icon.png";
    } else if (strCtype == "A") {
        imgsrc = "images/wallpapers-icons.png";
    } else {
        imgsrc = "images/music-icon.png";
    }
    return imgsrc;
}
myApp.controller('BindingMusicPagingOne', function ($scope, $http) {
    var hdnsecid_MusicpagingOne = document.getElementById("hdnsecid_MusicpagingOne").value;
    var hdnevent_MusicpagingOne = document.getElementById("hdnevent_MusicpagingOne").value;
    var sectionCattyep = "";
    //alert('testing');
    $scope.MusicDataPagingOne = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageOne(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageChangedMusicOne = function (newPage) {
        getMusicPageOne(newPage);
    };

    function getMusicPageOne(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingOne + "&sid=" + hdnsecid_MusicpagingOne + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + '&lang=' + slang;
        $http.get(surl)
         .then(function (results) {
             if (results.data.response == undefined) {
                 document.getElementById("MusicScreenOne").setAttribute("style", "display:none");
             } else {
                 var count = results.data.response.numFound;
                 //var count = results.data.response.total;
                 sectionCattyep = results.data.response.cattype;
                 var SectionImage = GetSectionImage(sectionCattyep);
                 $scope.SECTIONIMG = SectionImage;
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     document.getElementById("MusicScreenOne").setAttribute("style", "display:none");
                 } else {
                     $scope.MusicDataPagingOne = results.data.response.docs;
                     $scope.totalItems = results.data.response.numFound;
                     // $scope.totalItems = results.data.response.total;
                     $scope.TITLE = results.data.response.title;
                     try {
                         var avcredits = $('#hdncredits').val();
                         if (avcredits == undefined) avcredits = '0';
                         if (parseInt(avcredits) > 0) {
                             $.each($scope.MusicDataPagingOne, function (i, item) {
                                 item.price.downloadprice = '0.0';
                             });
                         }
                     } catch (excredits) { }
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }

    $scope.getLangData = function () {
        return slang;
    }
});
myApp.controller('BindingMusicPagingTwo', function ($scope, $http) {
    var hdnsecid_MusicpagingTwo = document.getElementById("hdnsecid_MusicpagingTwo").value;
    var hdnevent_MusicpagingTwo = document.getElementById("hdnevent_MusicpagingTwo").value;
    //alert('testing');
    $scope.MusicDataPagingTwo = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageTwo(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedMusicTwo = function (newPage) {
        getMusicPageTwo(newPage);
    };

    function getMusicPageTwo(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingTwo + "&sid=" + hdnsecid_MusicpagingTwo + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang;
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicScreenTwo").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataPagingTwo = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
                 try {
                     var avcredits = $('#hdncredits').val();
                     if (avcredits == undefined) avcredits = '0';
                     if (parseInt(avcredits) > 0) {
                         $.each($scope.MusicDataPagingTwo, function (i, item) {
                             item.price.downloadprice = '0.0';
                         });
                     }
                 } catch (excredits) { }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicPagingThree', function ($scope, $http) {
    var hdnsecid_MusicpagingThree = document.getElementById("hdnsecid_MusicpagingThree").value;
    var hdnevent_MusicpagingThree = document.getElementById("hdnevent_MusicpagingThree").value;
    //alert('testing');
    $scope.MusicDataPagingThree = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageThree(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedMusicThree = function (newPage) {
        getMusicPageThree(newPage);
    };

    function getMusicPageThree(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingThree + "&sid=" + hdnsecid_MusicpagingThree + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang;
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicScreenThree").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataPagingThree = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
                 try {
                     var avcredits = $('#hdncredits').val();
                     if (avcredits == undefined) avcredits = '0';
                     if (parseInt(avcredits) > 0) {
                         $.each($scope.MusicDataPagingThree, function (i, item) {
                             item.price.downloadprice = '0.0';
                         });
                     }
                 } catch (excredits) { }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicPagingFour', function ($scope, $http) {
    var hdnsecid_MusicpagingFour = document.getElementById("hdnsecid_MusicpagingFour").value;
    var hdnevent_MusicpagingFour = document.getElementById("hdnevent_MusicpagingFour").value;
    //alert('testing');
    $scope.MusicDataPagingFour = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageFour(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedMusicFour = function (newPage) {
        getMusicPageFour(newPage);
    };

    function getMusicPageFour(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingFour + "&sid=" + hdnsecid_MusicpagingFour + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang;
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicScreenFour").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataPagingFour = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
                 try {
                     var avcredits = $('#hdncredits').val();
                     if (avcredits == undefined) avcredits = '0';
                     if (parseInt(avcredits) > 0) {
                         $.each($scope.MusicDataPagingFour, function (i, item) {
                             item.price.downloadprice = '0.0';
                         });
                     }
                 } catch (excredits) { }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicPagingFive', function ($scope, $http) {
    var hdnsecid_MusicpagingFive = document.getElementById("hdnsecid_MusicpagingFive").value;
    var hdnevent_MusicpagingFive = document.getElementById("hdnevent_MusicpagingFive").value;
    //alert('testing');
    $scope.MusicDataPagingFive = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageFive(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedMusicFive = function (newPage) {
        getMusicPageFive(newPage);
    };

    function getMusicPageFive(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingFive + "&sid=" + hdnsecid_MusicpagingFive + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang;
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicScreenFive").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataPagingFive = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
                 try {
                     var avcredits = $('#hdncredits').val();
                     if (avcredits == undefined) avcredits = '0';
                     if (parseInt(avcredits) > 0) {
                         $.each($scope.MusicDataPagingFive, function (i, item) {
                             item.price.downloadprice = '0.0';
                         });
                     }
                 } catch (excredits) { }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicPagingSix', function ($scope, $http) {
    var hdnsecid_MusicpagingSix = document.getElementById("hdnsecid_MusicpagingSix").value;
    var hdnevent_MusicpagingSix = document.getElementById("hdnevent_MusicpagingSix").value;
    //alert('testing');
    $scope.MusicDataPagingSix = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageSix(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedMusicSix = function (newPage) {
        getMusicPageSix(newPage);
    };

    function getMusicPageSix(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingSix + "&sid=" + hdnsecid_MusicpagingSix + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang;
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicScreenSix").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataPagingSix = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
                 try {
                     var avcredits = $('#hdncredits').val();
                     if (avcredits == undefined) avcredits = '0';
                     if (parseInt(avcredits) > 0) {
                         $.each($scope.MusicDataPagingSix, function (i, item) {
                             item.price.downloadprice = '0.0';
                         });
                     }
                 } catch (excredits) { }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicPagingSeven', function ($scope, $http) {
    var hdnsecid_MusicpagingSeven = document.getElementById("hdnsecid_MusicpagingSeven").value;
    var hdnevent_MusicpagingSeven = document.getElementById("hdnevent_MusicpagingSeven").value;
    //alert('testing');
    $scope.MusicDataPagingSeven = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageSeven(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedMusicSeven = function (newPage) {
        getMusicPageSeven(newPage);
    };

    function getMusicPageSeven(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingSeven + "&sid=" + hdnsecid_MusicpagingSeven + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang;
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicScreenSeven").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataPagingSeven = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
                 try {
                     var avcredits = $('#hdncredits').val();
                     if (avcredits == undefined) avcredits = '0';
                     if (parseInt(avcredits) > 0) {
                         $.each($scope.MusicDataPagingSeven, function (i, item) {
                             item.price.downloadprice = '0.0';
                         });
                     }
                 } catch (excredits) { }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicPagingEight', function ($scope, $http) {
    var hdnsecid_MusicpagingEight = document.getElementById("hdnsecid_MusicpagingEight").value;
    var hdnevent_MusicpagingEight = document.getElementById("hdnevent_MusicpagingEight").value;
    //alert('testing');
    $scope.MusicDataPagingEight = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageEight(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedMusicEight = function (newPage) {
        getMusicPageEight(newPage);
    };

    function getMusicPageEight(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingEight + "&sid=" + hdnsecid_MusicpagingEight + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang;
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicScreenEight").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataPagingEight = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
                 try {
                     var avcredits = $('#hdncredits').val();
                     if (avcredits == undefined) avcredits = '0';
                     if (parseInt(avcredits) > 0) {
                         $.each($scope.MusicDataPagingEight, function (i, item) {
                             item.price.downloadprice = '0.0';
                         });
                     }
                 } catch (excredits) { }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicPagingNine', function ($scope, $http) {
    var hdnsecid_MusicpagingNine = document.getElementById("hdnsecid_MusicpagingNine").value;
    var hdnevent_MusicpagingNine = document.getElementById("hdnevent_MusicpagingNine").value;
    //alert('testing');
    $scope.MusicDataPagingNine = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageNine(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedMusicNine = function (newPage) {
        getMusicPageNine(newPage);
    };

    function getMusicPageNine(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingNine + "&sid=" + hdnsecid_MusicpagingNine + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang;
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicScreenNine").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataPagingNine = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
                 try {
                     var avcredits = $('#hdncredits').val();
                     if (avcredits == undefined) avcredits = '0';
                     if (parseInt(avcredits) > 0) {
                         $.each($scope.MusicDataPagingNine, function (i, item) {
                             item.price.downloadprice = '0.0';
                         });
                     }
                 } catch (excredits) { }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicPagingTen', function ($scope, $http) {
    var hdnsecid_MusicpagingTen = document.getElementById("hdnsecid_MusicpagingTen").value;
    var hdnevent_MusicpagingTen = document.getElementById("hdnevent_MusicpagingTen").value;
    //alert('testing');
    $scope.MusicDataPagingTen = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getMusicPageTen(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedMusicTen = function (newPage) {
        getMusicPageTen(newPage);
    };

    function getMusicPageTen(pageNumber) {
        var surl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicpagingTen + "&sid=" + hdnsecid_MusicpagingTen + "&resp=advanced&psize=8&pnumber=" + pageNumber + "&qid=" + qid + "&lang=" + slang;
        $http.get(surl)
         .then(function (results) {
             var count = results.data.response.numFound;
             //var count = results.data.response.total;
             var sectionCattyep = results.data.response.cattype;
             var SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicScreenTen").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataPagingTen = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 // $scope.totalItems = results.data.response.total;
                 $scope.TITLE = results.data.response.title;
                 try {
                     var avcredits = $('#hdncredits').val();
                     if (avcredits == undefined) avcredits = '0';
                     if (parseInt(avcredits) > 0) {
                         $.each($scope.MusicDataPagingTen, function (i, item) {
                             item.price.downloadprice = '0.0';
                         });
                     }
                 } catch (excredits) { }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusic', function ($scope, $http) {
    var hdnsecid_Music = document.getElementById("hdnsecid_Music").value;
    var hdnevent_Music = document.getElementById("hdnevent_Music").value;
    var hdnpsize_Music = document.getElementById("hdnpsize_Music").value;
    var sectionCattyep = "";
    if (hdnpsize_Music == undefined) {
        hdnpsize_Music = "";
    }
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_Music + "&sid=" + hdnsecid_Music + "&resp=full&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_Music)
     .then(function (results) {
         sectionCattyep = results.data.response.cattype;
         var SectionImage = GetSectionImage(sectionCattyep);
         $scope.SECTIONIMG = SectionImage;
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("MusicScreen").setAttribute("style", "display:none");
         } else {
             $scope.MusicData = results.data.response.docs;
             $scope.totalItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
         }
     });
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicOne', function ($scope, $http) {
    var hdnsecid_MusicOne = document.getElementById("hdnsecid_MusicOne").value;
    var hdnevent_MusicOne = document.getElementById("hdnevent_MusicOne").value;
    var hdnpsize_MusicOne = document.getElementById("hdnpsize_MusicOne").value;
    var SectionImage = "";
    if (hdnpsize_MusicOne == undefined) {
        hdnpsize_MusicOne = "";
    }
    try {
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicOne + "&sid=" + hdnsecid_MusicOne + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicOne)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicOne").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataOne = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingMusicTwo', function ($scope, $http) {
    try {
        var hdnsecid_MusicTwo = document.getElementById("hdnsecid_MusicTwo").value;
        var hdnevent_MusicTwo = document.getElementById("hdnevent_MusicTwo").value;
        var hdnpsize_MusicTwo = document.getElementById("hdnpsize_MusicTwo").value;
        var SectionImage = "";
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicTwo + "&sid=" + hdnsecid_MusicTwo + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicTwo)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicTwo").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataTwo = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingMusicThree', function ($scope, $http) {
    try {
        var hdnsecid_MusicThree = document.getElementById("hdnsecid_MusicThree").value;
        var hdnevent_MusicThree = document.getElementById("hdnevent_MusicThree").value;
        var hdnpsize_MusicThree = document.getElementById("hdnpsize_MusicThree").value;
        var SectionImage = "";
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicThree + "&sid=" + hdnsecid_MusicThree + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicThree)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicThree").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataThree = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingMusicFour', function ($scope, $http) {
    try {
        var hdnsecid_MusicFour = document.getElementById("hdnsecid_MusicFour").value;
        var hdnevent_MusicFour = document.getElementById("hdnevent_MusicFour").value;
        var hdnpsize_MusicFour = document.getElementById("hdnpsize_MusicFour").value;
        var SectionImage = "";
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicFour + "&sid=" + hdnsecid_MusicFour + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicFour)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicFour").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataFour = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingMusicFive', function ($scope, $http) {
    try {
        var hdnsecid_MusicFive = document.getElementById("hdnsecid_MusicFive").value;
        var hdnevent_MusicFive = document.getElementById("hdnevent_MusicFive").value;
        var hdnpsize_MusicFive = document.getElementById("hdnpsize_MusicFive").value;
        var SectionImage = "";
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicFive + "&sid=" + hdnsecid_MusicFive + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicFive)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicFive").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataFive = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingMusicSix', function ($scope, $http) {
    try {
        var hdnsecid_MusicSix = document.getElementById("hdnsecid_MusicSix").value;
        var hdnevent_MusicSix = document.getElementById("hdnevent_MusicSix").value;
        var hdnpsize_MusicSix = document.getElementById("hdnpsize_MusicSix").value;
        var SectionImage = "";
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicSix + "&sid=" + hdnsecid_MusicSix + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicSix)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicSix").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataSix = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingMusicSeven', function ($scope, $http) {
    try {
        var hdnsecid_MusicSeven = document.getElementById("hdnsecid_MusicSeven").value;
        var hdnevent_MusicSeven = document.getElementById("hdnevent_MusicSeven").value;
        var hdnpsize_MusicSeven = document.getElementById("hdnpsize_MusicSeven").value;
        var SectionImage = "";
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicSeven + "&sid=" + hdnsecid_MusicSeven + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicSeven)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicSeven").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataSeven = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingMusicEight', function ($scope, $http) {
    try {
        var hdnsecid_MusicEight = document.getElementById("hdnsecid_MusicEight").value;
        var hdnevent_MusicEight = document.getElementById("hdnevent_MusicEight").value;
        var hdnpsize_MusicEight = document.getElementById("hdnpsize_MusicEight").value;
        var SectionImage = "";
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicEight + "&sid=" + hdnsecid_MusicEight + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicEight)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicEight").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataEight = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingMusicNine', function ($scope, $http) {
    try {
        var hdnsecid_MusicNine = document.getElementById("hdnsecid_MusicNine").value;
        var hdnevent_MusicNine = document.getElementById("hdnevent_MusicNine").value;
        var hdnpsize_MusicNine = document.getElementById("hdnpsize_MusicNine").value;
        var SectionImage = "";
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicNine + "&sid=" + hdnsecid_MusicNine + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicNine)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicNine").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataNine = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingMusicTen', function ($scope, $http) {
    try {
        var hdnsecid_MusicTen = document.getElementById("hdnsecid_MusicTen").value;
        var hdnevent_MusicTen = document.getElementById("hdnevent_MusicTen").value;
        var hdnpsize_MusicTen = document.getElementById("hdnpsize_MusicTen").value;
        var SectionImage = "";
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_MusicTen + "&sid=" + hdnsecid_MusicTen + "&resp=advanced&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_MusicTen)
         .then(function (results) {
             var sectionCattyep = results.data.response.cattype;
             SectionImage = GetSectionImage(sectionCattyep);
             $scope.SECTIONIMG = SectionImage;
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("MusicTen").setAttribute("style", "display:none");
             } else {
                 $scope.MusicDataTen = results.data.response.docs;
                 $scope.totalItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    } catch (e) { }
});
myApp.controller('BindingWallpaper', function ($scope, $http) {
    var hdnsecid_Wallpapers = document.getElementById("hdnsecid_Wallpapers").value;
    var hdnevent_Wallpapers = document.getElementById("hdnevent_Wallpapers").value;
    var hdnpsize_Wallpapers = document.getElementById("hdnpsize_Wallpapers").value;
    var hdnrnd_Wallpapers = document.getElementById("hdnrnd_Wallpapers").value;
    //resp=advanced
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_Wallpapers + "&sid=" + hdnsecid_Wallpapers + "&resp=full&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_Wallpapers + "&rnd=T")
     .then(function (results) {
         //alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("WallpaperScreen").setAttribute("style", "display:none");
         } else {
             var objdata = results.data.response.docs;
             try {
                 if (hdnrnd_Wallpapers == 'T')
                     shuffleArray(objdata);
             } catch (ex) { }
             $scope.WallpaperData = objdata;
             $scope.totalItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
             setTimeout(function () {
                 $("#owl-demo3").owlCarousel({
                     items: 4,
                     lazyLoad: true,
                     navigation: false
                 });
             }, 2000);
         }
     });
});

myApp.controller('BindingWallpapernew', function ($scope, $http) {
    var hdnsecid_Wallpapersnew = document.getElementById("hdnsecid_Wallpapersnew").value;
    var hdnevent_Wallpapersnew = document.getElementById("hdnevent_Wallpapersnew").value;
    var hdnpsize_Wallpapersnew = document.getElementById("hdnpsize_Wallpapersnew").value;
    var hdnrnd_Wallpapersnew = document.getElementById("hdnrnd_Wallpapersnew").value;
    //resp=advanced
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_Wallpapersnew + "&sid=" + hdnsecid_Wallpapersnew + "&resp=full&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_Wallpapersnew)
     .then(function (results) {
         //alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("WallpaperScreennew").setAttribute("style", "display:none");
         } else {
             var objdata = results.data.response.docs;
             try {
                 if (hdnrnd_Wallpapersnew == 'T')
                     shuffleArray(objdata);
             } catch (ex) { }
             $scope.WallpapernewData = results.data.response.docs;
             $scope.totalItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
             setTimeout(function () {
                 $("#owl-demo10").owlCarousel({
                     items: 4,
                     lazyLoad: true,
                     navigation: false
                 });
             }, 2000);
         }
     });
});

myApp.controller('BindingWallpapernewtwo', function ($scope, $http) {
    var hdnsecid_Wallpapersnewtwo = document.getElementById("hdnsecid_Wallpapersnewtwo").value;
    var hdnevent_Wallpapersnewtwo = document.getElementById("hdnevent_Wallpapersnewtwo").value;
    var hdnpsize_Wallpapersnewtwo = document.getElementById("hdnpsize_Wallpapersnewtwo").value;
    //resp=advanced
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_Wallpapersnewtwo + "&sid=" + hdnsecid_Wallpapersnewtwo + "&resp=full&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_Wallpapersnewtwo)
     .then(function (results) {
         //alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("WallpaperScreennewtwo").setAttribute("style", "display:none");
         } else {
             $scope.WallpapernewtwoData = results.data.response.docs;
             $scope.totalItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
             setTimeout(function () {
                 $("#owl-demo11").owlCarousel({
                     items: 4,
                     lazyLoad: true,
                     navigation: false
                 });
             }, 2000);
         }
     });
});


myApp.controller('BindingDataAlertsfour', function ($scope, $http) {
    var hdnsecid_Dataalerts = document.getElementById("hdnsecid_Dataalertsfour").value;
    var hdnevent_Dataalerts = document.getElementById("hdnevent_Dataalertsfour").value;
    var hdnpsize_Dataalerts = document.getElementById("hdnpsize_Dataalertsfour").value;
    var sUrl = "/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_Dataalerts + "&sid=" + hdnsecid_Dataalerts + "&resp=advanced&psize=" + hdnpsize_Dataalerts + "&pnumber=0&qid=" + qid + '&lang=' + slang;
    $http.get(sUrl).then(function (results) {
        if (results.data.response == undefined) { } else {
            var datacount = results.data.response.total;
            if (datacount == undefined) datacount = 1;
            if (parseInt(datacount) == 1) {
                var datan = [];
                datan.push(results.data.response.docs);
                $scope.DataAlertsDataFour = datan;
            } else {
                $scope.DataAlertsDataFour = results.data.response.docs;
            }
            $scope.TITLE = results.data.response.title;
        }
    });
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        $("#owl-demo9").owlCarousel({
            items: 5,
            lazyLoad: true,
            navigation: false
        });
    });
});

myApp.controller('BindingWallpaperTwo', function ($scope, $http) {
    var hdnsecid_WallpapersTwo = document.getElementById("hdnsecid_WallpapersTwo").value;
    var hdnevent_WallpapersTwo = document.getElementById("hdnevent_WallpapersTwo").value;
    var hdnpsize_WallpapersTwo = document.getElementById("hdnpsize_WallpapersTwo").value;
    //resp=advanced
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_WallpapersTwo + "&sid=" + hdnsecid_WallpapersTwo + "&resp=full&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_WallpapersTwo)
     .then(function (results) {
         //alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("WallpaperScreenTwo").setAttribute("style", "display:none");
         } else {
             $scope.WallpaperData = results.data.response.docs;
             $scope.totalItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
             setTimeout(function () {
                 $("#owl-demo8").owlCarousel({
                     items: 4,
                     lazyLoad: true,
                     navigation: false
                 });
             }, 2000);
         }
     });
});
myApp.controller('BindingCarousalOne', function ($scope, $http) {
    try {
        var hdnsecid_CarousalOne = document.getElementById("hdnsecid_CarousalOne").value;
        var hdnevent_CarousalOne = document.getElementById("hdnevent_CarousalOne").value;
        $http.get("./pageapi.aspx?typxm=" + hdnevent_CarousalOne + "&sid=" + hdnsecid_CarousalOne + "&oresp=json&jf=t&chn=wap&qid=" + qid + "&lang=" + slang)
         .then(function (response) {
             //alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
             if (response.data.ROOT == undefined || response.data.ROOT.STATUS.toString() == "-1") { } else if (response.data.ROOT.SECTION.GALLERY.TOTAL.toString() != "0") {
                 $scope.CarousalOneData = response.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.TITLE = response.data.ROOT.SECTION.TITLE;
                 //                 setTimeout(function () {
                 //                     $("#owl-demo6").owlCarousel({
                 //                         items: 4,
                 //                         lazyLoad: true,
                 //                         navigation: false
                 //                     });
                 //                 }, 2000);
             }
         });
        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            $("#owl-demo6").owlCarousel({
                items: 4,
                lazyLoad: true,
                navigation: false
            });
        });
    } catch (e) { }
});
myApp.controller('BindingCarousalTwo', function ($scope, $http) {
    try {
        var hdnsecid_CarousalTwo = document.getElementById("hdnsecid_CarousalTwo").value;
        var hdnevent_CarousalTwo = document.getElementById("hdnevent_CarousalTwo").value;
        //  alert("./pageapi.aspx?typxm=" + hdnevent_Wallpapers + "&sid=" + hdnsecid_Wallpapers + "&oresp=json&jf=t");
        $http.get("./pageapi.aspx?typxm=" + hdnevent_CarousalTwo + "&sid=" + hdnsecid_CarousalTwo + "&oresp=json&jf=t&chn=wap&qid=" + qid + "&lang=" + slang)
         .then(function (response) {
             //alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
             if (response.data.ROOT == undefined || response.data.ROOT.STATUS.toString() == "-1") { } else if (response.data.ROOT.SECTION.GALLERY.TOTAL.toString() != "0") {
                 $scope.CarousalTwoData = response.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.TITLE = response.data.ROOT.SECTION.TITLE;
                 //                 setTimeout(function () {
                 //                     $("#owl-demo7").owlCarousel({
                 //                         items: 4,
                 //                         lazyLoad: true,
                 //                         navigation: false
                 //                     });
                 //                 }, 2000);
             }
         });
        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            $("#owl-demo7").owlCarousel({
                items: 4,
                lazyLoad: true,
                navigation: false
            });
        });
    } catch (e) { }
});
myApp.controller('BindingVideos', function ($scope, $http) {
    var hdnsecid_Videos = document.getElementById("hdnsecid_Videos").value;
    var hdnevent_Videos = document.getElementById("hdnevent_Videos").value;
    var hdnpsize_Videos = document.getElementById("hdnpsize_Videos").value;
    var hdnrnd_Videos = document.getElementById("hdnrnd_Videos").value;
    //resp=advanced
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_Videos + "&sid=" + hdnsecid_Videos + "&resp=full&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_Videos)
     .then(function (results) {
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("VideosScreen").setAttribute("style", "display:none");
         } else {
             var objdata = results.data.response.docs;
             try {
                 if (hdnrnd_Videos == 'T')
                     shuffleArray(objdata);
             } catch (ex) { }
             $scope.VideosData = objdata;
             $scope.totalItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
             setTimeout(function () {
                 $("#owl-demo4").owlCarousel({
                     items: 4,
                     lazyLoad: true,
                     navigation: false
                 });
             }, 2000);
         }
     });
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingFullVideos', function ($scope, $http) {
    var hdnsecid_FullVideos = document.getElementById("hdnsecid_FullVideos").value;
    var hdnevent_FullVideos = document.getElementById("hdnevent_FullVideos").value;
    var hdnpsize_FullVideos = document.getElementById("hdnpsize_FullVideos").value;
    //resp=advanced
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=pms&chn=wap&event=" + hdnevent_FullVideos + "&sid=" + hdnsecid_FullVideos + "&resp=full&qid=" + qid + "&lang=" + slang + "&psize=" + hdnpsize_FullVideos)
     .then(function (results) {
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("VideosScreen").setAttribute("style", "display:none");
         } else {
             $scope.FullVideosData = results.data.response.docs;
             $scope.totalItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
             setTimeout(function () {
                 $("#owl-demo4").owlCarousel({
                     items: 4,
                     lazyLoad: true,
                     navigation: false
                 });
             }, 2000);
         }
     });
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingMusicBundle', function ($scope, $http) {
    $http.get("./pageapi.aspx?typxm=musicbundle&oresp=json&jf=t&chn=wap&qid=" + qid + "&lang=" + slang)
     .then(function (response) {
         //  alert(response.data.ROOT.SECTION.GALLERY.CONTENT);
         if (response.data.ROOT.STATUS.toString() == "-1") { } else if (response.data.ROOT.SECTION.GALLERY.TOTAL.toString() != "0") {
             $scope.MusicBundleData = response.data.ROOT.SECTION.GALLERY.CONTENT;
             $scope.TITLE = response.data.ROOT.SECTION.TITLE;
         }
     });
});
myApp.controller('BindingSimilar', function ($scope, $http) {
    //var url = './pageapi.aspx?typxm=similar&cid=' + strCID + '&ctype=' + strCtype + '&oresp=json&jf=T'
    var catid = getQuerystringValueByName('catid');
    if (catid == undefined) catid = '';
    var url = '';
    if (catid != '') {
        url = '/v5portalapis_Stg/contentapi.aspx?mode=getcontentsbycatid&chn=wap&catid=' + catid + '&resp=advanced&cattype=' + strCtype + '&qid=' + qid + '&lang=' + slang + '&rnd=T';
    } else {
        url = '/v5portalapis_Stg/contentapi.aspx?mode=getsimilar&chn=wap&scid=' + strCID + '&resp=advanced&cattype=' + strCtype + '&qid=' + qid + '&lang=' + slang;
    }
    $http.get(url)
     .then(function (results) {
         /*
         // alert(results.data.ROOT.SECTION.GALLERY.CONTENT);
         if (response.data.ROOT.STATUS.toString() == "-1") {
         }
         else if (results.data.ROOT.SECTION.GALLERY.TOTAL.toString() != "0") {
         $scope.SimilarData = results.data.ROOT.SECTION.GALLERY.CONTENT;
         $scope.TITLE = results.data.ROOT.SECTION.TITLE;
         }             
         */
         var objdata = results.data.response.docs;
         try {
             //shuffleArray(objdata);
         } catch (ex) { }
         //$scope.SimilarData = objdata;            
         if (catid != '') {
             var datan = [];
             $.each(objdata, function (i, item) {
                 //alert(item.contentId);
                 var cntid = objdata[i].contentId;
                 if (parseInt(cntid) != parseInt(strCID)) {
                     var pos = objdata[i].shorttext;
                     if (pos == undefined || pos == '') pos = '999';
                     objdata[i].shorttext = parseInt(pos);
                     datan.push(objdata[i]);
                 }
             });
             $scope.SimilarData = datan;
         } else {
             $scope.SimilarData = objdata;
         }
         $scope.TITLE = '';
         var SectionImage = GetSectionImage(strCtype);
         $scope.SECTIONIMG = SectionImage;
         /*
         setTimeout(function () {
             $("#owl-demo4").owlCarousel({
                 items: 4,
                 lazyLoad: true,
                 navigation: false
             });
         }, 2000);
         */
     });
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        $("#owl-demo4").owlCarousel({
            items: 4,
            lazyLoad: true,
            navigation: false
        });
    });
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindingBundle', function ($scope, $http) {
    $scope.LoadBindingBundle = function () {
        sofferid = getQuerystringValueByName('offerid');
        otype = getQuerystringValueByName('otype');;
        var url = '/v5portalapis_Stg/contentapi.aspx?mode=getbundle&chn=wap&cid=' + strCID + '&resp=advanced&cattype=' + strCtype + '&qid=' + qid + '&lang=' + slang + '&oid=' + sofferid + '&mnu=prev&chn=wap';
        //&psize=3
        if (sofferid == "" || otype == "" || otype.toLowerCase() != 'b') {
            document.getElementById("BundleScreen").setAttribute("style", "display:none");
        } else {
            $http.get(url)
             .then(function (results) {
                 if (results.data.response == undefined) {
                     document.getElementById("BundleScreen").setAttribute("style", "display:none");
                 } else {
                     $scope.BundleData = results.data.response.docs;
                     try {
                         if (results.data.usersubstatus == undefined) {
                             // mobileno not passing case
                             $scope.SUBSTATUS = 'F';
                         } else {
                             $scope.SUBSTATUS = results.data.usersubstatus.toString();
                         }
                     } catch (e) { }
                     $scope.TITLE = '';
                     $scope.OFFERTYPE = $scope.BundleData[0].offers[0].offertype;
                     $scope.OFFERID = $scope.BundleData[0].offers[0].offerId;
                     $scope.Grnadtotal = 0;
                     document.getElementById("BundleScreen").setAttribute("style", "display:block");
                     var SectionImage = GetSectionImage(strCtype);
                     $scope.SECTIONIMG = SectionImage;
                     setTimeout(function () {
                         $("#owl-demo3").owlCarousel({
                             items: 4,
                             lazyLoad: true,
                             navigation: false
                         });
                     }, 2000);
                 }
             });
            $scope.getGrandTotal = function () {
                var total = 0;
                var OfferTtotal = 0;
                if ($scope.BundleData != undefined) {
                    for (var i = 0; i < $scope.BundleData.length; i++) {
                        if (i == 0) {
                            var dwnprice = $scope.BundleData[i].price.downloadprice;
                            var offerprice = $scope.BundleData[i].offers[0].price;
                            total = total + dwnprice;
                            OfferTtotal = OfferTtotal + offerprice;
                        }
                    }
                    total = parseFloat(total).toFixed(2);
                    $scope.OfferTtotal = parseFloat(OfferTtotal).toFixed(2);
                }
                return total;
            }
            $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
        }
    }
    $scope.LoadBindingBundle();
    $scope.bundlesubscibe = function () {
        try {
            var Cid = getParameterByName("cc");
            var Ctype = getParameterByName("ctype");
            var offerid = getParameterByName("offerid");
            var Qid = getParameterByName("qid");
            var ReqURL = '/v5portalapis_Stg/offers.aspx?mode=0&cid=' + Cid + '&ctype=' + Ctype + '&oid=' + offerid + '&qid=' + Qid + '&lang=' + slang + '&event=test&chn=wap'
            try {
                $.ajax({
                    type: "GET",
                    async: false,
                    crossdomain: true,
                    url: ReqURL,
                    success: function (res) {
                        if (res == "0") {
                            document.getElementById("BUNERR").innerHTML = "Successfully subscribed";
                            document.getElementById("BUNERR").setAttribute("style", "color:green");
                            $scope.LoadBindingBundle();
                        } else {
                            document.getElementById("BUNERR").innerHTML = "Sorry.. unable to process your request";
                            document.getElementById("BUNERR").setAttribute("style", "color:red");
                            return false;
                        }
                    }
                });
            } catch (ex) { }
        } catch (e) { }
    }
});
myApp.controller('BindingComments', function ($scope, $http) {
    $scope.CommentsData = []; //List of Comments
    function loadComments() {
        $http.get("./pageapi.aspx?cd=CMNT&ctype=" + strCtype + "&cc=" + strCID + "&pn=0&psize=20&oresp=json&jf=T&chn=wap&qid=" + qid + '&lang=' + slang)
         .then(function (response) {
             try {
                 if (response.data.ROOT.STATUS.toString() == "-1") {
                     document.getElementById("bindcmnt").setAttribute("style", "display:none");
                 } else if (response.data.ROOT.SECTION.COMMENT != undefined) {
                     if (!angular.isArray(response.data.ROOT.SECTION.COMMENT))
                         $scope.CommentsData = [response.data.ROOT.SECTION.COMMENT];
                     else
                         $scope.CommentsData = response.data.ROOT.SECTION.COMMENT;
                     document.getElementById("bindcmnt").setAttribute("style", "display:block");
                 } else {
                     document.getElementById("bindcmnt").setAttribute("style", "display:none");
                 }
             } catch (e) { }
         });
    }
    loadComments();
    $scope.SetComment = function (cid, ctype) {
        var error = '';
        var msgtxt = document.getElementById("txtcomment").value.trim();
        document.getElementById("CMNTERR").innerHTML = '';
        var rate = document.getElementById("hdnrate").value.trim();
        var bFlag = validateComment();
        if (bFlag == "false") {
            try {
                document.getElementById("CMNTERR").setAttribute("style", "color:red");
                if (slang == '' || slang == 'arab')
                    document.getElementById("CMNTERR").innerHTML = "Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ ØªØ¹Ù„ÙŠÙ‚ ØµØ§Ù„Ø­";
                else
                    document.getElementById("CMNTERR").innerHTML = "Please enter valid comment";
            } catch (ee) { }
            return false;
        } else {
            document.getElementById("CMNTERR").innerHTML = '';
            document.getElementById("CMNTERR").setAttribute("class", "loader");
            document.getElementById("btncmntconfirm").disabled = true;
            msgtxt = encodeURI(msgtxt);
            var Qid = getParameterByName("qid");
            var reqURL = './PageAPI.aspx?cd=CMNT&ctype=' + ctype + '&cc=' + cid + '&chn=wap&action=ADD&cmnt=' + msgtxt + '&rate=' + rate + '&oresp=json&jf=T&qid=' + Qid + '&lang=' + slang;
            $.ajax({
                type: "POST",
                async: false,
                url: reqURL,
                success: function (msg) {
                    document.getElementById("CMNTERR").setAttribute("class", "");
                    if (msg.ROOT.STATUS == "0") {
                        loadComments();
                        try {
                            document.getElementById('CMNTERR').setAttribute("style", "color:green");
                            document.getElementById("CMNTERR").innerHTML = 'Comment Submitted Successfully';
                            document.getElementById("txtcomment").value = '';
                            //hiding comment pop up
                            document.getElementById("collapse1").setAttribute("style", "display:none;");
                            //getComments(cid, ctype, '3');
                        } catch (ee) { }
                        return false;
                    } else {
                        try {
                            document.getElementById("CMNTERR").disabled = false;
                            document.getElementById('CMNTERR').setAttribute("style", "color:red");
                            document.getElementById("CMNTERR").innerHTML = msg.ROOT.MSG;;
                        } catch (ee) { }
                        return false;
                    }
                }
            });
        }
    }
    $scope.CmntCancel = function () {
        try {
            document.getElementById("collapse1").setAttribute("style", "display:none;");
        } catch (e) { }
    }
});
myApp.controller('BindSearchResults', function ($scope, $http) {
    $scope.SearchResultsMusicData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getSearchResultsPage_FS(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    var titlesrchkey = "\"" + srchkey + "\"";
    document.getElementById("srchtxt").innerHTML = titlesrchkey.toUpperCase();
    $scope.pageChangedMusic = function (newPage) {
        //Music
        // alert('Music');
        getSearchResultsPage_FS(newPage);
    };

    function getSearchResultsPage_FS(pageNumber) {
        //var surl = './pageapi.aspx?mnu=search&key=' + srchkey + '&iscnt=t&psize=10&ctype=FS&pno=' + pageNumber + '&oresp=json&jf=T&qid=' + qid;
        pageNumber = pageNumber - 1;
        var surl = '/v5portalapis_Stg/contentapi.aspx?mode=search&title=' + srchkey + '&resp=advanced&ct=FS&psize=4&pnumber=' + pageNumber + "&chn=wap&qid=" + qid + '&lang=' + slang;
        $http.get(surl)
         .then(function (results) {
             /*
             //  alert(results.data.ROOT.SECTION.TOTAL);
             if (results.data.ROOT.STATUS.toString() == "-1" || results.data.ROOT.SECTION.TOTAL.toString() == "0") {
             document.getElementById("musicdiv").setAttribute("style", "display:none");
             }
             else {
             $scope.SearchResultsMusicData = results.data.ROOT.SECTION.CONTENT;
             $scope.totalItems = results.data.ROOT.SECTION.TOTAL;
             $scope.SEARCHKEY = srchkey;
             }
             */
             if (results.data.response == undefined) {
                 document.getElementById("musicdiv").setAttribute("style", "display:none");
             } else {
                 var count = results.data.response.numFound;
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     document.getElementById("musicdiv").setAttribute("style", "display:none");
                 } else {
                     $scope.SearchResultsMusicData = results.data.response.docs;
                     $scope.totalItems = results.data.response.numFound;
                     $scope.SEARCHKEY = srchkey;
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding wall search
myApp.controller('BindSearchWallResults', function ($scope, $http) {
    $scope.SearchResultsWallData = [];
    $scope.itemsPerPage = 4;
    $scope.totalWallItems = 0;
    getSearchResultsPage_I(1);
    $scope.pagination = {
        current: 1
    };
    //            $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
    //            });
    $scope.pageChangedWall = function (newPage) {
        //Wallpapers
        // alert('wall');
        getSearchResultsPage_I(newPage);
    };

    function getSearchResultsPage_I(pageNumber) {
        //var sWallurl = './pageapi.aspx?mnu=search&key=' + srchkey + '&iscnt=t&psize=10&ctype=I&pno=' + pageNumber + '&oresp=json&jf=T&qid=' + qid;
        pageNumber = pageNumber - 1;
        var sWallurl = '/v5portalapis_Stg/contentapi.aspx?mode=search&title=' + srchkey + '&resp=advanced&ct=I&psize=4&pnumber=' + pageNumber + "&chn=wap&qid=" + qid + "&lang=" + slang;
        // alert(sWallurl);
        $http.get(sWallurl)
         .then(function (results) {
             /*  
             if (results.data.ROOT.STATUS.toString() == "-1" || results.data.ROOT.SECTION.TOTAL.toString() == "0") {
                 document.getElementById("walldiv").setAttribute("style", "display:none");
             }
             else {
                 $scope.SearchResultsWallData = results.data.ROOT.SECTION.CONTENT;
                 $scope.totalWallItems = results.data.ROOT.SECTION.TOTAL;
                 $scope.SEARCHKEY = srchkey;
             }
             */
             if (results.data.response == undefined) {
                 document.getElementById("walldiv").setAttribute("style", "display:none");
             } else {
                 var count = results.data.response.numFound;
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     document.getElementById("walldiv").setAttribute("style", "display:none");
                 } else {
                     $scope.SearchResultsWallData = results.data.response.docs;
                     $scope.totalWallItems = results.data.response.numFound;
                     $scope.SEARCHKEY = srchkey;
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding Games search
myApp.controller('BindSearchGamesResults', function ($scope, $http) {
    $scope.SearchResultsGamesData = [];
    $scope.itemsPerPage = 4;
    $scope.totalGamesItems = 0;
    getSearchResultsPage_G(0);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageChangedGames = function (newPage) {
        //Wallpapers
        // alert('wall');
        getSearchResultsPage_G(newPage);
    };

    function getSearchResultsPage_G(pageNumber) {
        //var sGamesurl = './pageapi.aspx?mnu=search&key=' + srchkey + '&iscnt=t&psize=10&ctype=G&pno=' + pageNumber + '&oresp=json&jf=T&qid=' + qid;
        pageNumber = pageNumber - 1;
        var sGamesurl = '/v5portalapis_Stg/contentapi.aspx?mode=search&title=' + srchkey + '&resp=advanced&ct=G&psize=4&pnumber=' + pageNumber + "&chn=wap&qid=" + qid + "&lang=" + slang;
        // alert(sWallurl);
        $http.get(sGamesurl)
         .then(function (results) {
             // alert(sGamesurl);
             if (results.data.response == undefined) {
                 document.getElementById("GamesScreen").setAttribute("style", "display:none");
             }
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             //if (results.data.ROOT.STATUS.toString() == "-1" || results.data.ROOT.SECTION.TOTAL.toString() == "0") {
             if (count == '' || count == '0') {
                 document.getElementById("GamesScreen").setAttribute("style", "display:none");
             } else {
                 /*
                                  $scope.SearchResultsGamesData = results.data.ROOT.SECTION.CONTENT;
                                  $scope.totalGamesItems = results.data.ROOT.SECTION.TOTAL;
                                  $scope.SEARCHKEY = srchkey;
                                  */
                 $scope.SearchResultsGamesData = results.data.response.docs;
                 $scope.totalGamesItems = results.data.response.numFound;
                 $scope.SEARCHKEY = srchkey;
                 setTimeout(function () {
                     $("#capslide_img_cont2").capslide({
                         caption_color: '000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#832EA5',
                         border: '0px solid #ccc',
                         showcaption: true
                     });
                     $("#capslide_img_cont3").capslide({
                         caption_color: '000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#832EA5',
                         border: '0px solid #ccc',
                         showcaption: true
                     });
                     $("#capslide_img_cont4").capslide({
                         caption_color: '000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#832EA5',
                         border: '0px solid #ccc',
                         showcaption: true
                     });
                     $("#capslide_img_cont5").capslide({
                         caption_color: '000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#832EA5',
                         border: '0px solid #ccc',
                         showcaption: true
                     });
                     $("#capslide_img_cont6").capslide({
                         caption_color: '000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#832EA5',
                         border: '0px solid #ccc',
                         showcaption: true
                     });
                     $("#capslide_img_cont7").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#549360',
                         border: '0px solid #549360',
                         showcaption: true
                     });
                     $("#capslide_img_cont8").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#d13f68',
                         border: '0px solid #d13f68',
                         showcaption: true
                     });
                     $("#capslide_img_cont9").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont10").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont11").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont12").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont13").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont14").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont15").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont16").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont17").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont18").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont19").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont20").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont21").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont22").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont23").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont24").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont25").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $("#capslide_img_cont26").capslide({
                         caption_color: '#000000',
                         caption_bgcolor: '#b48601',
                         overlay_bgcolor: '#3fa6d1',
                         border: '0px solid #3fa6d1',
                         showcaption: true
                     });
                     $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
                         // alert('testing');
                     });
                 }, 2000);
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding Video search
myApp.controller('BindSearchVideoResults', function ($scope, $http) {
    $scope.SearchResultsVideoData = [];
    $scope.itemsPerPage = 4;
    $scope.totalVideotems = 0;
    getSearchResultsPage_V(1);
    $scope.pagination = {
        current: 1
    };
    //            $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
    //            });
    $scope.pageChangedVideo = function (newPage) {
        //Wallpapers
        // alert('Video');
        getSearchResultsPage_V(newPage);
    };

    function getSearchResultsPage_V(pageNumber) {
        //var sVideourl = './pageapi.aspx?mnu=search&key=' + srchkey + '&iscnt=t&psize=10&ctype=V&pno=' + pageNumber + '&oresp=json&jf=T&qid=' + qid;
        pageNumber = pageNumber - 1;
        var sVideourl = '/v5portalapis_Stg/contentapi.aspx?mode=search&title=' + srchkey + '&resp=advanced&ct=V&psize=4&pnumber=' + pageNumber + "&chn=wap&qid=" + qid + "&lang=" + slang;
        // alert(sVideourl);
        $http.get(sVideourl)
         .then(function (results) {
             /*
                           // alert(results.data.ROOT.SECTION.TOTAL);
                           if (results.data.ROOT.STATUS.toString() == "-1" || results.data.ROOT.SECTION.TOTAL.toString() == "0") {
                               document.getElementById("videosdiv").setAttribute("style", "display:none");
                           }
                           else {
                               $scope.SearchResultsVideoData = results.data.ROOT.SECTION.CONTENT;
                               $scope.totalVideotems = results.data.ROOT.SECTION.TOTAL;
                           }
                           */
             if (results.data.response == undefined) {
                 document.getElementById("videosdiv").setAttribute("style", "display:none");
             } else {
                 var count = results.data.response.numFound;
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     document.getElementById("videosdiv").setAttribute("style", "display:none");
                 } else {
                     $scope.SearchResultsVideoData = results.data.response.docs;
                     $scope.totalVideotems = results.data.response.numFound;
                     $scope.SEARCHKEY = srchkey;
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//View Download section
//Binding FullVideo search
myApp.controller('BindSearchFullVideoResults', function ($scope, $http) {
    $scope.SearchResultsFullVideoData = [];
    $scope.itemsPerPage = 4;
    $scope.totalVideotems = 0;
    getSearchResultsPage_FV(1);
    $scope.pagination = {
        current: 1
    };
    //            $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
    //            });
    $scope.pageChangedVideo = function (newPage) {
        //Wallpapers
        // alert('FullVideo');
        getSearchResultsPage_FV(newPage);
    };

    function getSearchResultsPage_FV(pageNumber) {
        //var sVideourl = './pageapi.aspx?mnu=search&key=' + srchkey + '&iscnt=t&psize=10&ctype=FV&pno=' + pageNumber + '&oresp=json&jf=T&qid=' + qid;
        pageNumber = pageNumber - 1;
        var sFullVideourl = '/v5portalapis_Stg/contentapi.aspx?mode=search&title=' + srchkey + '&resp=advanced&ct=FV&psize=4&pnumber=' + pageNumber + "&chn=wap&qid=" + qid + "&lang=" + slang;
        // alert(sVideourl);
        $http.get(sFullVideourl)
         .then(function (results) {
             /*
                           // alert(results.data.ROOT.SECTION.TOTAL);
                           if (results.data.ROOT.STATUS.toString() == "-1" || results.data.ROOT.SECTION.TOTAL.toString() == "0") {
                               document.getElementById("Fullvideosdiv").setAttribute("style", "display:none");
                           }
                           else {
                               $scope.SearchResultsFullVideoData = results.data.ROOT.SECTION.CONTENT;
                               $scope.totalFullVideotems = results.data.ROOT.SECTION.TOTAL;
                           }
                           */
             if (results.data.response == undefined) {
                 document.getElementById("Fullvideosdiv").setAttribute("style", "display:none");
             } else {
                 var count = results.data.response.numFound;
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     document.getElementById("Fullvideosdiv").setAttribute("style", "display:none");
                 } else {
                     $scope.SearchResultsFullVideoData = results.data.response.docs;
                     $scope.totalFullVideotems = results.data.response.numFound;
                     $scope.SEARCHKEY = srchkey;
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding Music dwn results
myApp.controller('BindDownloadMusicResults', function ($scope, $http) {
    $scope.DownloadMusicResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    //getDwnResultsPage_M(0);
    getDwnResultsPage_M(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageDwnChangedMusic = function (newPage) {
        //Wallpapers 
        //alert(newPage);
        getDwnResultsPage_M(newPage);
    };

    function getDwnResultsPage_M(pageNumber) {
        pageNumber = parseInt(pageNumber) - 1;
        var sDwnMusicurl = './pageapi.aspx?mnu=gacc&typxm=myacc&ctype=FS&iscnt=t&psize=4&pn=' + pageNumber + '&msisdn=' + hdnmob + '&oresp=json&jf=T&chn=wap&qid=' + qid + '&lang=' + slang;
        //alert(sDwnMusicurl);
        $http.get(sDwnMusicurl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("MusicContentScreen").setAttribute("style", "display:none");
             } else {
                 var dataObject = results.data.ROOT.SECTION.CONTENT;
                 if (dataObject != undefined) {
                     var ismultiple = 'F';
                     if (dataObject.ID == undefined)
                         ismultiple = 'T';
                     if (ismultiple == 'F') {
                         var datan = [];
                         datan.push(dataObject);
                         $scope.DownloadMusicResultsData = datan;
                         $scope.totalDwnMusicItems = results.data.ROOT.SECTION.TOTAL;
                     } else {
                         $scope.DownloadMusicResultsData = dataObject;
                         $scope.totalDwnMusicItems = results.data.ROOT.SECTION.TOTAL;
                     }
                 } else {
                     document.getElementById("MusicContentScreen").setAttribute("style", "display:none");
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding Games dwn results
myApp.controller('BindDownloadGamesResults', function ($scope, $http) {
    $scope.DownloadGamesResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    //getDwnResultsPage_G(0);
    getDwnResultsPage_G(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageDwnChangedGames = function (newPage) {
        //Wallpapers 
        // alert(newPage);
        getDwnResultsPage_G(newPage);
    };

    function getDwnResultsPage_G(pageNumber) {
        pageNumber = parseInt(pageNumber) - 1;
        var sDwnGamesurl = './pageapi.aspx?mnu=gacc&typxm=myacc&ctype=G&iscnt=t&psize=4&pn=' + pageNumber + '&msisdn=' + hdnmob + '&oresp=json&jf=T&chn=wap&qid=' + qid + '&lang=' + slang;
        // alert(sWallurl);
        $http.get(sDwnGamesurl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("GamesContentScreen").setAttribute("style", "display:none");
             } else {
                 var dataObject = results.data.ROOT.SECTION.CONTENT;
                 if (dataObject != undefined) {
                     var ismultiple = 'F';
                     if (dataObject.ID == undefined)
                         ismultiple = 'T';
                     if (ismultiple == 'F') {
                         var datan = [];
                         datan.push(dataObject);
                         $scope.DownloadGamesResultsData = datan;
                         $scope.totalDwnGamesItems = results.data.ROOT.SECTION.TOTAL;
                     } else {
                         $scope.DownloadGamesResultsData = dataObject;
                         $scope.totalDwnGamesItems = results.data.ROOT.SECTION.TOTAL;
                     }
                 } else {
                     document.getElementById("GamesContentScreen").setAttribute("style", "display:none");
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding Wallpapers dwn results
myApp.controller('BindDownloadWallResults', function ($scope, $http) {
    $scope.DownloadWallResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    //getDwnResultsPage_I(0);
    getDwnResultsPage_I(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageDwnChangedWall = function (newPage) {
        //Wallpapers 
        // alert(newPage);
        getDwnResultsPage_I(newPage);
    };

    function getDwnResultsPage_I(pageNumber) {
        pageNumber = parseInt(pageNumber) - 1;
        var sDwnWallurl = './pageapi.aspx?mnu=gacc&typxm=myacc&ctype=I&iscnt=t&psize=4&pn=' + pageNumber + '&msisdn=' + hdnmob + '&oresp=json&jf=T&chn=wap&qid=' + qid + '&lang=' + slang;
        // alert(sWallurl);
        $http.get(sDwnWallurl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("WallContentScreen").setAttribute("style", "display:none");
             } else {
                 var dataObject = results.data.ROOT.SECTION.CONTENT;
                 if (dataObject != undefined) {
                     var ismultiple = 'F';
                     if (dataObject.ID == undefined)
                         ismultiple = 'T';
                     if (ismultiple == 'F') {
                         var datan = [];
                         datan.push(dataObject);
                         $scope.DownloadWallResultsData = datan;
                         $scope.totalDwnWallItems = results.data.ROOT.SECTION.TOTAL;
                     } else {
                         $scope.DownloadWallResultsData = dataObject;
                         $scope.totalDwnWallItems = results.data.ROOT.SECTION.TOTAL;
                     }
                 } else {
                     document.getElementById("WallContentScreen").setAttribute("style", "display:none");
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding Videos dwn results
myApp.controller('BindDownloadVideoResults', function ($scope, $http) {
    $scope.DownloadVideoResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    //getDwnResultsPage_V(0);
    getDwnResultsPage_V(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageDwnChangedVideo = function (newPage) {
        //Wallpapers 
        // alert(newPage);
        getDwnResultsPage_V(newPage);
    };

    function getDwnResultsPage_V(pageNumber) {
        pageNumber = parseInt(pageNumber) - 1;
        var sDwnVideourl = './pageapi.aspx?mnu=gacc&typxm=myacc&ctype=V&iscnt=t&psize=4&pn=' + pageNumber + '&msisdn=' + hdnmob + '&oresp=json&jf=T&chn=wap&qid=' + qid + '&lang=' + slang;
        //alert(sDwnVideourl);
        $http.get(sDwnVideourl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("VideoContentScreen").setAttribute("style", "display:none");
             } else {
                 var dataObject = results.data.ROOT.SECTION.CONTENT;
                 if (dataObject != undefined) {
                     var ismultiple = 'F';
                     if (dataObject.ID == undefined)
                         ismultiple = 'T';
                     if (ismultiple == 'F') {
                         var datan = [];
                         datan.push(dataObject);
                         $scope.DownloadVideoResultsData = datan;
                         $scope.totalDwnVideoItems = results.data.ROOT.SECTION.TOTAL;
                     } else {
                         $scope.DownloadVideoResultsData = dataObject;
                         $scope.totalDwnVideoItems = results.data.ROOT.SECTION.TOTAL;
                     }
                 } else {
                     document.getElementById("VideoContentScreen").setAttribute("style", "display:none");
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding Full Video Results..

myApp.controller('BindDownloadFullVideoResults', function ($scope, $http) {
    $scope.DownloadFullVideoResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    //getDwnResultsPage_V(0);
    getDwnResultsPage_FV(1);
    $scope.pagination = {
        current: 1
    };

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();

    });

    $scope.pageDwnChangedFullVideo = function (newPage) {

        //Wallpapers 
        // alert(newPage);
        getDwnResultsPage_FV(newPage);

    };

    function getDwnResultsPage_FV(pageNumber) {

        pageNumber = parseInt(pageNumber) - 1;

        var sDwnVideourl = './pageapi.aspx?mnu=gacc&typxm=myacc&ctype=FV&iscnt=t&psize=4&pn=' + pageNumber + '&msisdn=' + hdnmob + '&oresp=json&jf=T&chn=wap&qid=' + qid;
        //alert(sDwnVideourl);
        $http.get(sDwnVideourl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {

                 document.getElementById("FullVideoContentScreen").setAttribute("style", "display:none");
             } else {
                 var dataObject = results.data.ROOT.SECTION.CONTENT;

                 if (dataObject != undefined) {

                     var ismultiple = 'F';
                     if (dataObject.ID == undefined)
                         ismultiple = 'T';

                     if (ismultiple == 'F') {
                         var datan = [];
                         datan.push(dataObject);
                         $scope.DownloadFullVideoResultsData = datan;
                         $scope.totalDwnFullVideoItems = results.data.ROOT.SECTION.TOTAL;
                     } else {
                         $scope.DownloadFullVideoResultsData = dataObject;
                         $scope.totalDwnFullVideoItems = results.data.ROOT.SECTION.TOTAL;
                     }

                 } else {


                     document.getElementById("FullVideoContentScreen").setAttribute("style", "display:none");

                 }
             }

         });

    }
    $scope.getBadgeData = function (badge, data) {
        try {

            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding Subscriotion results
myApp.controller('BindDownloadSubscriptionResults', function ($scope, $http) {
    $scope.DownloadSubscriptionResultsData = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getDwnResultsPage_Subscription(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageDwnChangedSubscription = function (newPage) {
        //Wallpapers 
        getDwnResultsPage_Subscription(newPage);
    };

    function getDwnResultsPage_Subscription(pageNumber) {
        var sDwnSuburl = './pageapi.aspx?cd=alerts&action=myactiveservices&oresp=json&jf=t&chn=wap&qid=' + qid + '&lang=' + slang + '&&pn=' + pageNumber + '&psize=8';
        // alert(sWallurl);
        $http.get(sDwnSuburl)
         .then(function (results) {
             //  alert(results.data.ROOT.SECTION.CONTENT);
             $scope.totalDwnMusicItems = results.data.ROOT.SECTION.TOTAL;
             if (results.data.ROOT.SECTION.TOTAL != undefined && results.data.ROOT.SECTION.TOTAL == 0) {
                 if (slang == '' || slang == 'arab')
                     $scope.NOSUBSCRIPTIONCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                 else
                     $scope.NOSUBSCRIPTIONCONTENT = "Sorry, there are no contents for your account.";
             } else {
                 if (!angular.isArray(results.data.ROOT.SECTION.CONTENT))
                     $scope.DownloadSubscriptionResultsData = [results.data.ROOT.SECTION.CONTENT];
                 else
                     $scope.DownloadSubscriptionResultsData = results.data.ROOT.SECTION.CONTENT;
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding Wishlist results
myApp.controller('BindWhishlistResults', function ($scope, $http) {
    $scope.WishlistResultsData = [];
    $scope.itemsPerPage = 15;
    $scope.totalItems = 0;
    getWishlistResultsPage(0);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageDwnChangedWishlist = function (newPage) {
        //Wallpapers 
        getWishlistResultsPage(newPage);
    };

    function getWishlistResultsPage(pageNumber) {
        //var sWishlisturl = './pageapi.aspx?cd=wlist&action=List&iscnt=T&psize=8&pno=' + pageNumber + '&oresp=json&jf=T&ctype=FS&qid=' + qid;
        var sWishlisturl = '/v5portalapis_Stg/contentapi.aspx?mode=getuserwishlist&chn=wap&qid=' + qid + '&lang=' + slang;
        $http.get(sWishlisturl)
         .then(function (results) {
             if (results.data.response == undefined) {
                 document.getElementById("WhishlistScreen").setAttribute("style", "display:none");
                 if (slang == '' || slang == 'arab')
                     $scope.NOWISHLISTCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                 else
                     $scope.NOWISHLISTCONTENT = "Sorry, there are no contents for your account.";
             } else {
                 if (results.data.response.numFound <= 0) {
                     document.getElementById("WhishlistScreen").setAttribute("style", "display:none");
                     if (slang == '' || slang == 'arab')
                         $scope.NOWISHLISTCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                     else
                         $scope.NOWISHLISTCONTENT = "Sorry, there are no contents for your account.";
                 } else if (results.data.response.docs != undefined) {
                     $scope.WishlistResultsData = results.data.response.docs;
                     $scope.totalWishlistItems = results.data.response.numFound;
                 } else {
                     document.getElementById("WhishlistScreen").setAttribute("style", "display:none");
                     if (slang == '' || slang == 'arab')
                         $scope.NOWISHLISTCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                     else
                         $scope.NOWISHLISTCONTENT = "Sorry, there are no contents for your account.";
                 }
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
//Binding WishlistGames results
myApp.controller('BindWhishlistGamesResults', function ($scope, $http) {
    $scope.WhishlistGamesResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getWishlistResultsPage_G(0);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageDwnChangedWishlist_G = function (newPage) {
        //Wallpapers 
        getWishlistResultsPage_G(newPage);
    };

    function getWishlistResultsPage_G(pageNumber) {
        var sWishlistGamesurl = './pageapi.aspx?cd=wlist&action=List&iscnt=T&psize=4&pno=' + pageNumber + '&oresp=json&jf=T&ctype=G&chn=wap&qid=' + qid + '&lang=' + slang;
        $http.get(sWishlistGamesurl)
         .then(function (results) {
             // alert(sWishlistGamesurl);
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("WhishlistGamesScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.CONTENT != undefined) {
                 // alert('games' + results.data.ROOT.SECTION.CONTENT);
                 $scope.WishlistGamesResultsData = results.data.ROOT.SECTION.CONTENT;
                 $scope.totalWishlistGamesItems = results.data.ROOT.SECTION.TOTAL;
             } else {
                 document.getElementById("WhishlistGamesScreen").setAttribute("style", "display:none");
             }
         });
    }
});
//Binding WishlistWall results
myApp.controller('BindWhishlistWallResults', function ($scope, $http) {
    $scope.WhishlistWallResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getWishlistResultsPage_I(0);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageDwnChangedWishlist_I = function (newPage) {
        //Wallpapers 
        getWishlistResultsPage_I(newPage);
    };

    function getWishlistResultsPage_I(pageNumber) {
        var sWishlistWallurl = './pageapi.aspx?cd=wlist&action=List&iscnt=T&psize=4&pno=' + pageNumber + '&oresp=json&jf=T&ctype=I&chn=wap&qid=' + qid + '&lang=' + slang;
        $http.get(sWishlistWallurl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("WhishlistWallScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.CONTENT != undefined) {
                 $scope.WishlistWallResultsData = results.data.ROOT.SECTION.CONTENT;
                 $scope.totalWishlistWallItems = results.data.ROOT.SECTION.TOTAL;
             } else {
                 document.getElementById("WhishlistWallScreen").setAttribute("style", "display:none");
             }
         });
    }
});
//Binding WishlistVideo results
myApp.controller('BindWhishlistVideoResults', function ($scope, $http) {
    $scope.WhishlistVideoResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getWishlistResultsPage_V(0);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageDwnChangedWishlist_V = function (newPage) {
        //Wallpapers 
        getWishlistResultsPage_V(newPage);
    };

    function getWishlistResultsPage_V(pageNumber) {
        var sWishlistVideourl = './pageapi.aspx?cd=wlist&action=List&iscnt=T&psize=4&pno=' + pageNumber + '&oresp=json&jf=T&ctype=V&chn=wap&qid=' + qid + '&lang=' + slang;
        $http.get(sWishlistVideourl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("WhishlistVideoScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.CONTENT != undefined) {
                 $scope.WishlistVideoResultsData = results.data.ROOT.SECTION.CONTENT;
                 $scope.totalWishlistVideoItems = results.data.ROOT.SECTION.TOTAL;
             } else {
                 document.getElementById("WhishlistVideoScreen").setAttribute("style", "display:none");
             }
         });
    }
});
//BindViewedContentResults
myApp.controller('BindViewedContentResultsPaging', function ($scope, $http) {
    $scope.ViewedContentResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getViewedContentResultsResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageChangedViewedContent = function (newPage) {
        //Wallpapers 
        getViewedContentResultsResultsPage(newPage);
    };

    function getViewedContentResultsResultsPage(pageNumber) {
        var sViewedContenturl = '/v5portalapis_Stg/contentapi.aspx?mode=getuserviewed&chn=wap&qid=' + qid + '&lang=' + slang;
        $http.get(sViewedContenturl)
         .then(function (results) {
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("ViewedMusicScreen").setAttribute("style", "display:none");
             } else {
                 $scope.ViewedContentResultsData = results.data.response.docs;
                 $scope.totalViewedContentItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindViewedGamesResults', function ($scope, $http) {
    $scope.ViewedGamesResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getViewedGamesResultsResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageChangedViewedGames = function (newPage) {
        //Wallpapers 
        getViewedGamesResultsResultsPage(newPage);
    };

    function getViewedGamesResultsResultsPage(pageNumber) {
        var sViewedGamesturl = './pageapi.aspx?typxm=myacc&iscnt=t&psize=6&pn=0&qid=' + qid + '&lang=' + slang + '&oresp=json&jf=T&chn=wap';
        // alert(sWallurl);
        $http.get(sViewedGamesturl)
         .then(function (results) {
             //alert(results.data.ROOT.STATUS);
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("ViewedGamesScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
                 $scope.ViewedGamesResultsData = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.totalViewedGamesItems = results.data.ROOT.GALLERY.SECTION.TOTAL;
             } else {
                 document.getElementById("ViewedGamesScreen").setAttribute("style", "display:none");
             }
         });
    }
});
myApp.controller('BindViewedWallResults', function ($scope, $http) {
    $scope.ViewedWallResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getViewedWallResultsResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageChangedViewedWall = function (newPage) {
        //Wallpapers 
        getViewedWallResultsResultsPage(newPage);
    };

    function getViewedWallResultsResultsPage(pageNumber) {
        var sViewedWallturl = './pageapi.aspx?typxm=myacc&iscnt=t&psize=6&pn=0&qid=' + qid + '&lang=' + slang + '&oresp=json&jf=T&chn=wap';
        // alert(sWallurl);
        $http.get(sViewedWallturl)
         .then(function (results) {
             //alert(results.data.ROOT.STATUS);
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("ViewedWallScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
                 $scope.ViewedWallResultsData = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.totalViewedWallItems = results.data.ROOT.GALLERY.SECTION.TOTAL;
             } else {
                 document.getElementById("ViewedWallScreen").setAttribute("style", "display:none");
             }
         });
    }
});
myApp.controller('BindViewedVideoResults', function ($scope, $http) {
    $scope.ViewedVideoResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getViewedVideoResultsResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageChangedViewedVideo = function (newPage) {
        //Wallpapers 
        getViewedGamesResultsResultsPage(newPage);
    };

    function getViewedVideoResultsResultsPage(pageNumber) {
        var sViewedVideoturl = './pageapi.aspx?typxm=myacc&iscnt=t&psize=6&pn=0&qid=' + qid + '&lang=' + slang + '&oresp=json&jf=T&chn=wap';
        // alert(sWallurl);
        $http.get(sViewedVideoturl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("ViewedVideoScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
                 $scope.ViewedVideoResultsData = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.totalViewedVideoItems = results.data.ROOT.GALLERY.SECTION.TOTAL;
             } else {
                 document.getElementById("ViewedVideoScreen").setAttribute("style", "display:none");
             }
         });
    }
});
//BindPlayedContentResults
myApp.controller('BindPlayedContentResultsPaging', function ($scope, $http) {
    $scope.PlayedContentResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getPlayedContentResultsResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    /* $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
       });
       */
    $scope.pageChangedPlayedContent = function (newPage) {
        //Wallpapers 
        //console.log('calling');
        getPlayedContentResultsResultsPage(newPage);
    };

    function getPlayedContentResultsResultsPage(pageNumber) {
        var sPlayedCotenturl = '/v5portalapis_Stg/contentapi.aspx?mode=getuserplayed&chn=wap&qid=' + qid + '&lang=' + slang;
        $http.get(sPlayedCotenturl)
         .then(function (results) {
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("PlyaedContentScreen").setAttribute("style", "display:none");
             } else {
                 $scope.PlayedContentResultsData = results.data.response.docs;
                 $scope.totalPlayedContentItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindPlayedGamesResults', function ($scope, $http) {
    $scope.PlayedGamesResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getPlayedGamesResultsResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedPlayedGames = function (newPage) {
        //Wallpapers 
        getPlayedGamesResultsResultsPage(newPage);
    };

    function getPlayedGamesResultsResultsPage(pageNumber) {
        var sPlayedGamesurl = './pageapi.aspx?typxm=myacc&iscnt=t&psize=6&pn=0&qid=' + qid + '&lang=' + slang + '&oresp=json&jf=T&chn=wap';
        // alert(sWallurl);
        $http.get(sPlayedGamesurl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("PlyaedGamesScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
                 $scope.PlayedGamesResultsData = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.totalPlayedGamesItems = results.data.ROOT.GALLERY.SECTION.TOTAL;
             } else {
                 document.getElementById("PlyaedGamesScreen").setAttribute("style", "display:none");
             }
         });
    }
});
myApp.controller('BindPlayedWallResults', function ($scope, $http) {
    $scope.PlayedWallResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getPlayedWallResultsResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedPlayedWall = function (newPage) {
        //Wallpapers 
        getPlayedWallResultsResultsPage(newPage);
    };

    function getPlayedWallResultsResultsPage(pageNumber) {
        var sPlayedWallurl = './pageapi.aspx?typxm=myacc&iscnt=t&psize=6&pn=0&qid=' + qid + '&lang=' + slang + '&oresp=json&jf=T&chn=wap';
        // alert(sWallurl);
        $http.get(sPlayedWallurl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("PlyaedWallScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
                 $scope.PlayedWallResultsData = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.totalPlayedWallItems = results.data.ROOT.GALLERY.SECTION.TOTAL;
             } else {
                 document.getElementById("PlyaedWallScreen").setAttribute("style", "display:none");
             }
         });
    }
});
myApp.controller('BindPlayedVideoResults', function ($scope, $http) {
    $scope.PlayedVideoResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getPlayedVideoResultsResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
        changeLangNumbers();
    });
    $scope.pageChangedPlayedVideo = function (newPage) {
        //Wallpapers 
        getPlayedVideoResultsResultsPage(newPage);
    };

    function getPlayedVideoResultsResultsPage(pageNumber) {
        var sPlayedVideourl = './pageapi.aspx?typxm=myacc&iscnt=t&psize=6&pn=0&qid=' + qid + '&lang=' + slang + '&oresp=json&jf=T&chn=wap';
        // alert(sWallurl);
        $http.get(sPlayedVideourl)
         .then(function (results) {
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("PlyaedVideoScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
                 $scope.PlayedVideoResultsData = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.totalPlayedVideoItems = results.data.ROOT.GALLERY.SECTION.TOTAL;
             } else {
                 document.getElementById("PlyaedVideoScreen").setAttribute("style", "display:none");
             }
         });
    }
});
//BindSharedContentResults
myApp.controller('BindSharedContentResultsPaging', function ($scope, $http) {
    $scope.SharedContentResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getSharedContentResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedSharedContent = function (newPage) {
        //Wallpapers 
        getSharedContentResultsPage(newPage);
    };

    function getSharedContentResultsPage(pageNumber) {
        var sSharedContenturl = '/v5portalapis_Stg/contentapi.aspx?mode=getuserviewed&chn=wap&qid=' + qid + '&lang=' + slang;
        // alert(sWallurl);
        $http.get(sSharedContenturl)
         .then(function (results) {
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("SharedContentScreen").setAttribute("style", "display:none");
             } else {
                 $scope.SharedContentResultsData = results.data.response.docs;
                 $scope.totalSharedContentItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         });
    }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindSharedGamesResults', function ($scope, $http) {
    $scope.SharedGamesResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getSharedGamesResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedSharedGames = function (newPage) {
        //Wallpapers 
        getSharedGamesResultsPage(newPage);
    };

    function getSharedGamesResultsPage(pageNumber) {
        var sSharedGamesurl = './pageapi.aspx?typxm=myacc&iscnt=t&psize=6&pn=0&qid=' + qid + '&lang=' + slang + '&oresp=json&jf=T&chn=wap';
        // alert(sWallurl);
        $http.get(sSharedGamesurl)
         .then(function (results) {
             //  alert(results.data.ROOT.STATUS);
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("SharedGamesScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
                 $scope.SharedGamesResultsData = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.totalSharedGamesItems = results.data.ROOT.GALLERY.SECTION.TOTAL;
             } else {
                 document.getElementById("SharedGamesScreen").setAttribute("style", "display:none");
             }
         });
    }
});
myApp.controller('BindSharedWallResults', function ($scope, $http) {
    $scope.SharedWallResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getSharedWallResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedSharedWall = function (newPage) {
        //Wallpapers 
        getSharedWallResultsPage(newPage);
    };

    function getSharedWallResultsPage(pageNumber) {
        var sSharedWallurl = './pageapi.aspx?typxm=myacc&iscnt=t&psize=6&pn=0&qid=' + qid + '&lang=' + slang + '&oresp=json&jf=T&chn=wap';
        // alert(sWallurl);
        $http.get(sSharedWallurl)
         .then(function (results) {
             //  alert(results.data.ROOT.STATUS);
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("SharedWallScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
                 $scope.SharedWallResultsData = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.totalSharedWallItems = results.data.ROOT.GALLERY.SECTION.TOTAL;
             } else {
                 document.getElementById("SharedWallScreen").setAttribute("style", "display:none");
             }
         });
    }
});
myApp.controller('BindSharedVideoResults', function ($scope, $http) {
    $scope.SharedVideoResultsData = [];
    $scope.itemsPerPage = 4;
    $scope.totalItems = 0;
    getSharedVideoResultsPage(1);
    $scope.pagination = {
        current: 1
    };
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
    $scope.pageChangedSharedVideo = function (newPage) {
        //Wallpapers 
        getSharedVideoResultsPage(newPage);
    };

    function getSharedVideoResultsPage(pageNumber) {
        var sSharedVideourl = './pageapi.aspx?typxm=myacc&iscnt=t&psize=6&pn=0&qid=' + qid + '&lang=' + slang + '&oresp=json&jf=T&chn=wap';
        // alert(sWallurl);
        $http.get(sSharedVideourl)
         .then(function (results) {
             //  alert(results.data.ROOT.STATUS);
             if (results.data.ROOT.STATUS == -1) {
                 document.getElementById("SharedVideoScreen").setAttribute("style", "display:none");
             } else if (results.data.ROOT.SECTION.GALLERY.CONTENT != undefined) {
                 $scope.SharedVideoResultsData = results.data.ROOT.SECTION.GALLERY.CONTENT;
                 $scope.totalSharedVideoItems = results.data.ROOT.GALLERY.SECTION.TOTAL;
             } else {
                 document.getElementById("SharedVideoScreen").setAttribute("style", "display:none");
             }
         });
    }
});
myApp.controller('previewcontroller', function ($scope, $http) {
    var event = getQuerystringValueByName('typxm');
    if (event == undefined) event = '';
    if (event == '') {
        event = getQuerystringValueByName('event');
        if (event == undefined) event = '';
    }
    var url = '/v5portalapis_Stg/contentapi.aspx?mode=GETCONTENTSBYCIDs&cid=' + strCID + '&ct=' + strCtype + '&cstat=true&resp=full&action=preview&qid=' + qid + "&lang=" + slang + "&mnu=prev&chn=wap&event=" + event;
    $http.get(url)
     .then(function (results) {
         if (sofferid != "" && otype != "" && otype.toLowerCase() == 'd') {
             try {
                 document.getElementById("dwnpricecls").setAttribute("class", "redStrikeHover");
                 var oprice = document.getElementById("dwnofferpirce").value;
                 document.getElementById("dwnofferpirce").setAttribute("style", "display:block");
             } catch (e) { }
         } else {
             try {
                 document.getElementById("dwnofferpirce").setAttribute("style", "display:none");
             } catch (e) { }
         }
         $scope.data = results.data.response.docs[0];

         try {
             var avcredits = $('#hdncredits').val();
             if (avcredits == undefined) avcredits = '0';
             if (parseInt(avcredits) > 0) {
                 $scope.data.price.downloadprice = '0.0';
                 var elea = $('#enablebuy').find("a");
                 if (elea != null && elea != undefined) {
                     var dtitle = 'Download';
                     if (slang == 'dari')
                         dtitle = 'Ø¯Ø§Ù†Ù„ÙˆØ¯ Ù†Ù…ÙˆØ¯Ù†';
                     else if (slang == 'past')
                         dtitle = 'Ú‰Ø§Ù†Ù„ÙˆÚ‰ÙˆÙ„';
                     elea.html(dtitle);
                 }
             }
         } catch (excredits) { }
     });
});
myApp.controller('BindViewedContentResults', function ($scope, $http) {
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=getuserviewed&psize=20&chn=wap&qid=" + qid + '&lang' + slang)
     .then(function (results) {
         if (results.data.response == undefined) {
             document.getElementById("ViewedContentScreen").setAttribute("style", "display:none");
             if (slang == '' || slang == 'arab')
                 $scope.NOVIEWEDCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
             else
                 $scope.NOVIEWEDCONTENT = "Sorry, there are no contents for your account.";
         } else {
             var count = results.data.response.numFound;
             if (count == undefined) count = '';
             if (count == '' || count == '0') {
                 document.getElementById("ViewedContentScreen").setAttribute("style", "display:none");
                 if (slang == '' || slang == 'arab')
                     $scope.NOVIEWEDCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                 else
                     $scope.NOVIEWEDCONTENT = "Sorry, there are no contents for your account.";
             } else {
                 $scope.ViewedContentResultsData = results.data.response.docs;
                 $scope.totalViewedContentItems = results.data.response.numFound;
                 $scope.TITLE = results.data.response.title;
             }
         }
     });
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindPlayedContentResults', function ($scope, $http) {
    var playlistcids = $.cookie("Playlist");
    //if (playlistcids == undefined) {
    //document.getElementById("PlayedContentScreen").setAttribute("style", "display:none");
    //$scope.NOPLAYEDCONTENT = "Sorry, there are no contents for your account.";
    // }
    // else {
    //  $http.get("/v5portalapis_Stg/contentapi.aspx?mode=GETCONTENTSBYCIDs&cid=" + playlistcids + "&cstat=true&resp=advanced&action=&qid=" + qid)
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=getuserplayed&psize=20&chn=wap&qid=" + qid + "&lang=" + slang)
     .then(function (results) {
         var count = results.data.response.numFound;
         if (count == undefined) count = '';
         if (count == '' || count == '0') {
             document.getElementById("PlayedContentScreen").setAttribute("style", "display:none");
             if (slang == '' || slang == 'arab')
                 $scope.NOPLAYEDCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
             else
                 $scope.NOPLAYEDCONTENT = "Sorry, there are no contents for your account.";
         } else {
             $scope.PlayedContentResultsData = results.data.response.docs;
             $scope.totalPlayedContentItems = results.data.response.numFound;
             $scope.TITLE = results.data.response.title;
         }
     });
    // }
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindSharedContentResults', function ($scope, $http) {
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=getusershared&psize=20&chn=wap&qid=" + qid + "&lang=" + slang)
     .then(function (results) {
         if (results.data.response == undefined) {
             document.getElementById("SharedContentScreen").setAttribute("style", "display:none");
             if (slang == '' || slang == 'arab')
                 $scope.NOSHAREDCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
             else
                 $scope.NOSHAREDCONTENT = "Sorry, there are no contents for your account.";
         } else {
             var count = results.data.response.numFound;
             //alert('test');
             try {
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     //alert('TEST' + count);
                     document.getElementById("SharedContentScreen").setAttribute("style", "display:none");
                     if (slang == '' || slang == 'arab')
                         $scope.NOSHAREDCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                     else
                         $scope.NOSHAREDCONTENT = "Sorry, there are no contents for your account.";
                 } else {
                     $scope.SharedContentResultsData = results.data.response.docs;
                     $scope.totalSharedContentItems = results.data.response.numFound;
                     $scope.TITLE = results.data.response.title;
                 }
             } catch (e) {
                 // alert('err');	
                 if (slang == '' || slang == 'arab')
                     $scope.NOSHAREDCONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                 else
                     $scope.NOSHAREDCONTENT = "Sorry, there are no contents for your account.";
             }
         }
     });
    $scope.getBadgeData = function (badge, data) {
        try {
            if (data.offers[0] != undefined && data.offers[0].offertype != undefined && (data.offers[0].offertype.toUpperCase() == "BUNDLE" || data.offers[0].offertype.toUpperCase() == "DISCOUNT" || data.offers[0].offertype.toUpperCase() == "PXF")) {
                badge = data.offers[0].offerlabel;
            } else
                if (badge.toUpperCase() == "NA") {
                    badge = '';
                } else if (badge.toUpperCase() == "OFFER") {
                    badge = 'aa-offer';
                } else if (badge.toUpperCase() == "AD") {
                    badge = 'aa-ad';
                } else if (badge.toUpperCase() == "TRENDING") {
                    badge = 'aa-trending';
                } else if (badge.toUpperCase() == "NEW RELEASE") {
                    badge = 'aa-trending';
                } else {
                    badge = '';
                }
            return badge;
        } catch (ex) { }
    }
});
myApp.controller('BindUserBundleresults', function ($scope, $http) {
    $scope.isDisabled = false;
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=USERBUBDLES&psize=20&chn=wap&qid=" + qid + "&lang=" + slang)
     .then(function (results) {
         if (results.data.response == undefined) {
             document.getElementById("UserBundleContentScreen").setAttribute("style", "display:none");
             if (slang == '' || slang == 'arab')
                 $scope.NOUSERBUNDLECONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
             else
                 $scope.NOUSERBUNDLECONTENT = "Sorry, there are no contents for your account.";
         } else {
             var count = results.data.response.numFound;
             //alert('test');
             try {
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     //alert('TEST' + count);
                     document.getElementById("UserBundleContentScreen").setAttribute("style", "display:none");
                     if (slang == '' || slang == 'arab')
                         $scope.NOUSERBUNDLECONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                     else
                         $scope.NOUSERBUNDLECONTENT = "Sorry, there are no contents for your account.";
                 } else {
                     $scope.UserBundleContentResultsData = results.data.response.docs;
                     // $scope.totalSharedContentItems = results.data.response.numFound;
                     // $scope.TITLE = results.data.response.title;
                 }
             } catch (e) {
                 // alert('err');	
                 if (slang == '' || slang == 'arab')
                     $scope.NOUSERBUNDLECONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                 else
                     $scope.NOUSERBUNDLECONTENT = "Sorry, there are no contents for your account.";
             }
         }
     });
    try {
        $scope.LoadUserBundle = function (data) {
            try {
                $scope.isDisabled = true;
                debugger;
                var id = 'anc' + data.offerid
                document.getElementById(id).setAttribute("style", "display:none");
                document.getElementById("ubun1").setAttribute("style", "");
                document.getElementById("ubun2").setAttribute("style", "");
                document.getElementById("ubun3").setAttribute("style", "");
            } catch (e) { }
            sofferid = data.offerid;
            otype = data.offertype;
            var url = '/v5portalapis_Stg/contentapi.aspx?mode=getbundle&resp=advanced&qid=' + qid + '&lang=' + slang + '&oid=' + sofferid + '&mnu=prev&chn=wap';
            // url = '/v5portalapis_Stg/contentapi.aspx?mode=getbundle&resp=advanced&qid=&oid=6&mnu=prev&chn=wap';
            //  otype = 'b';
            //&psize=3
            if (sofferid == "" || otype == "" || otype.toLowerCase().slice(0, 1) != 'b') {
                document.getElementById("BundleScreen").setAttribute("style", "display:none");
            } else {
                $http.get(url)
                 .then(function (results) {
                     if (results.data.response == undefined) {
                         document.getElementById("BundleScreen").setAttribute("style", "display:none");
                     } else {
                         $scope.BundleData = results.data.response.docs;
                         try {
                             if (results.data.usersubstatus == undefined) {
                                 // mobileno not passing case
                                 $scope.SUBSTATUS = 'F';
                             } else {
                                 $scope.SUBSTATUS = results.data.usersubstatus.toString();
                             }
                         } catch (e) { }
                         $scope.TITLE = '';
                         $scope.OFFERTYPE = $scope.BundleData[0].offers[0].offertype;
                         $scope.OFFERID = $scope.BundleData[0].offers[0].offerId;
                         $scope.Grnadtotal = 0;
                         document.getElementById("BundleScreen").setAttribute("style", "display:block");
                         var SectionImage = GetSectionImage(strCtype);
                         $scope.SECTIONIMG = SectionImage;
                         $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
                             // setTimeout(function () {
                             $("#owl-demo3").owlCarousel({
                                 items: 4,
                                 lazyLoad: true,
                                 navigation: false
                             });
                             // }, 2000);
                         });
                     }
                 });
                $scope.getGrandTotal = function () {
                    var total = 0;
                    var OfferTtotal = 0;
                    if ($scope.BundleData != undefined) {
                        for (var i = 0; i < $scope.BundleData.length; i++) {
                            if (i == 0) {
                                var dwnprice = $scope.BundleData[i].price.downloadprice;
                                var offerprice = $scope.BundleData[i].offers[0].price;
                                total = total + dwnprice;
                                OfferTtotal = OfferTtotal + offerprice;
                            }
                        }
                        total = parseFloat(total).toFixed(2);
                        $scope.OfferTtotal = parseFloat(OfferTtotal).toFixed(2);
                    }
                    return total;
                }
                $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) { });
            }
        }
    } catch (e) { }
});
myApp.controller('BindFavouriteResults', function ($scope, $http) {
    $http.get("/v5portalapis_Stg/contentapi.aspx?mode=getuserfavourite&psize=20&chn=wap&qid=" + qid + "&lang=" + slang)
     .then(function (results) {
         if (results.data.response == undefined) {
             document.getElementById("FavouriteScreen").setAttribute("style", "display:none");
             if (slang == '' || slang == 'arab')
                 $scope.NOFAVOURITECONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
             else
                 $scope.NOFAVOURITECONTENT = "Sorry, there are no contents for your account.";
         } else {
             var count = results.data.response.numFound;
             //alert('test');
             try {
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     //alert('TEST' + count);
                     document.getElementById("FavouriteScreen").setAttribute("style", "display:none");
                     if (slang == '' || slang == 'arab')
                         $scope.NOFAVOURITECONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                     else
                         $scope.NOFAVOURITECONTENT = "Sorry, there are no contents for your account.";
                 } else {
                     $scope.FavouriteResultsData = results.data.response.docs;
                     $scope.totalFavouriteContentItems = results.data.response.numFound;
                     $scope.TITLE = results.data.response.title;
                 }
             } catch (e) {
                 // alert('err');	
                 if (slang == '' || slang == 'arab')
                     $scope.NOFAVOURITECONTENT = "Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ø­ØªÙˆÙŠØ§Øª ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ";
                 else
                     $scope.NOFAVOURITECONTENT = "Sorry, there are no contents for your account.";
             }
         }
     });
});
myApp.controller('BindingNotifications', function ($scope, $http) {
    var url = '';
    //url="/v5portalapis_Stg/contentapi.aspx?mode=gettrending&psize=10&randomize=true&qid=" + qid;
    url = '/v5portalapis_Stg/contentapi.aspx?mode=getusernotify&chn=wap&qid=' + qid + '&lang=' + slang;
    $http.get(url)
     .then(function (results) {
         if (results.data.response == undefined) {
             $('.aa-cart-notify').hide();
             $('.aa-cart-link').mouseover(function () {
                 return false;
             });
         } else {
             var count = results.data.response.numFound;
             try {
                 if (count == undefined) count = '';
                 if (count == '' || count == '0') {
                     $('.aa-cart-notify').hide();
                     $('.aa-cart-link').mouseover(function () {
                         return false;
                     });
                 } else {
                     var ele = results.data.response.docs;
                     var nots = 0;
                     var elen = [];
                     if (ele != undefined) {
                         $.each(ele, function (index) {
                             var newele = ele[index];
                             var ntitle = newele.title;
                             if (ntitle == undefined) ntitle = '';
                             if (ntitle != '') {
                                 elen.push(newele);
                             }
                         });
                         //nots = ele.length;
                         nots = elen.length;
                         if (nots == undefined) nots = 0;
                     }
                     //$scope.NotificationsData = ele;
                     $scope.NotificationsData = elen;
                     $scope.totalNotifications = nots;
                     //$scope.totalNotifications = results.data.response.numFound;                      
                     $scope.qid = qid;
                     $('.aa-cart-notify').show();
                 }
             } catch (e) { }
         }
     });
    $scope.getNotifyImage = function (img) {
        try {
            if (img.toUpperCase() == "NA") {
                img = 'images/logo.png';
            }
            return img;
        } catch (ex) { }
    }
    $scope.getNotifyHref = function (link) {
        try {
            if (link.toUpperCase() == "NA") {
                link = '#';
            }
            return link;
        } catch (ex) { }
    }
    $scope.updatenotify = function () {
        var urln = '/v5portalapis_Stg/contentapi.aspx?mode=getusernotify&chn=wap&qid=' + qid + '&lang=' + slang;
        $http.get(urln)
         .then(function (results) {
             if (results.data.response == undefined) {
                 $('.aa-cart-notify').hide();
                 $('.aa-cart-link').mouseover(function () {
                     return false;
                 });
             } else {
                 var count = results.data.response.numFound;
                 try {
                     if (count == undefined) count = '';
                     if (count == '' || count == '0') {
                         $('.aa-cart-notify').hide();
                         $('.aa-cart-link').mouseover(function () {
                             return false;
                         });
                     } else {
                         var ele = results.data.response.docs;
                         var nots = 0;
                         var elen = [];
                         if (ele != undefined) {
                             $.each(ele, function (index) {
                                 var newele = ele[index];
                                 var ntitle = newele.title;
                                 if (ntitle == undefined) ntitle = '';
                                 if (ntitle != '') {
                                     elen.push(newele);
                                 }
                             });
                             //nots = ele.length;
                             nots = elen.length;
                             if (nots == undefined) nots = 0;
                         }
                         //$scope.NotificationsData = ele;
                         $scope.NotificationsData = elen;
                         $scope.totalNotifications = nots;
                         //$scope.totalNotifications = results.data.response.numFound;                      
                         $scope.qid = qid;
                         $('.aa-cart-notify').show();
                     }
                 } catch (e) { }
             }
         });
    };
});
myApp.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keypress", function (event) {
            scope.$apply(function () {
                scope.$eval(attrs.myEnter);
            });
            event.preventDefault();
        });
    };
});
myApp.controller('BindingAutoSuggest', function ($scope, $http) {
    function getAutoSuggestResult(srchkey) {
        $http.get("/v5portalapis_Stg/contentapi.aspx?mode=search&title=" + srchkey + "&resp=advanced&ct=I&psize=4&pnumber=1&chn=wap&qid=" + qid + "&lang=" + slang)
         .then(function (results) {
             if (results.data.response == undefined) {
                 //document.getElementById("SharedContentScreen").setAttribute("style", "display:none");
                 //$scope.NOSHAREDCONTENT = "Sorry, there are no contents for your account.";
             } else {
                 var count = results.data.response.numFound;
                 try {
                     if (count == undefined) count = '';
                     if (count == '' || count == '0') {
                         //document.getElementById("SharedContentScreen").setAttribute("style", "display:none");
                         //$scope.NOSHAREDCONTENT = "Sorry,there are no contents for your account.";
                     } else {
                         $scope.AutoSuggestData = results.data.response.docs;
                         $('#divpredictivemusic').show();
                     }
                 } catch (e) { }
             }
         });
    }
});

function SetComment1(cid, ctype) {
    var error = '';
    var msgtxt = document.getElementById("txtcomment").value.trim();
    document.getElementById("CMNTERR").innerHTML = '';
    var rate = document.getElementById("hdnrate").value.trim();
    var bFlag = validateComment();
    //alert(bFlag)
    if (bFlag == "false") {
        try {
            document.getElementById("CMNTERR").setAttribute("style", "color:red");
            if (slang == '' || slang == 'arab')
                document.getElementById("CMNTERR").innerHTML = "Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ ØªØ¹Ù„ÙŠÙ‚ ØµØ§Ù„Ø­";
            else
                document.getElementById("CMNTERR").innerHTML = "Please enter valid comment";
        } catch (ee) { }
        return false;
    } else {
        document.getElementById("CMNTERR").innerHTML = '';
        document.getElementById("CMNTERR").setAttribute("class", "loader");
        document.getElementById("btncmntconfirm").disabled = true;
        msgtxt = encodeURI(msgtxt);
        var reqURL = './PageAPI.aspx?cd=CMNT&ctype=' + ctype + '&cc=' + cid + '&chn=wap&action=ADD&cmnt=' + msgtxt + '&rate=' + rate + '&oresp=json&jf=T&qid=' + qid + '&lang=' + slang;
        // alert(reqURL);
        $.ajax({
            type: "POST",
            async: false,
            url: reqURL,
            success: function (msg) {
                document.getElementById("CMNTERR").setAttribute("class", "");
                //alert(msg);
                //alert(msg.ROOT.STATUS);
                if (msg.ROOT.STATUS == "0") {
                    // RefreshComments(ctype,cid,Qid);
                    try {
                        document.getElementById('CMNTERR').setAttribute("style", "color:green");
                        document.getElementById("CMNTERR").innerHTML = 'Comment Submitted Successfully';
                        document.getElementById("txtcomment").value = '';
                        //getComments(cid, ctype, '3');
                    } catch (ee) { }
                    return false;
                } else {
                    try {
                        document.getElementById("CMNTERR").disabled = false;
                        document.getElementById('CMNTERR').setAttribute("style", "color:red");
                        document.getElementById("CMNTERR").innerHTML = msg.ROOT.MSG;;
                    } catch (ee) { }
                    return false;
                }
            }
        });
    }
}

function validateComment() {
    var flag = "true";
    var error = '';
    //var name = /^[a-zA-Z0-9!@\s,&.-]*$/;
    //var name = /^[a-zA-Z0-9!@.,-\s&]*$/;
    var name = /[a-zA-Z0-9!@.,-\s&\u0600-\u06FF]/;
    if (document.getElementById("txtcomment").value.trim().length == 0) {
        error = error + 'Comment,';
    } else
        if (name.test(document.getElementById("txtcomment").value.trim()) == false) {
            error = error + 'without special characters,';
        }
    if (error != '') {
        return "false";
    }
    return "true";
}

function ApplyDataAlertsCarousel() {
    try {
        $("#owl-demo1").owlCarousel({
            items: 4,
            lazyLoad: true,
            navigation: false
        });
    } catch (ex) { }
    try {
        //DataAlertsToggle();
    } catch (ex1) { }
}

function DataAlertsToggle() {
    try {
        $('[id^="capslide_img_cont"]').each(function () {
            $(this).capslide({
                caption_color: '000000',
                caption_bgcolor: '#b48601',
                overlay_bgcolor: '#832EA5',
                border: '0px solid #ccc',
                showcaption: true
            });
        });
    } catch (ex) { }
}

function dismissNotify(ele) {
    try {
        var notifyid = $(ele).attr('anid');
        var notifytitle = $(ele).attr('antitle');
        var result = '';
        var url = '/v5portalapis_Stg/contentapi.aspx?mode=ANALYTICSN&transtype=denotify&transmode=add&userid=0&authkey=34300042&channel=WAP&cid=' + notifyid + '&ctitle=' + notifytitle + '&networktype=3G&cpid=0&storename=MTNGHN&chn=wap&qid=' + qid + '&lang=' + slang;
        $.ajax({
            type: "GET",
            async: false,
            url: url,
            success: function (res) {
                result = res.status;
            }
        });
        if (result.toUpperCase() == 'SUCCESS') {
            $('#linotify' + notifyid).remove();
            var count = $('.aa-cart-notify').html();
            if (count == undefined) count = 0;
            if (parseInt(count) == 0) {
                $('.aa-cart-notify').hide();
                $('.aa-cart-link').mouseover(function () {
                    return false;
                });
            } else {
                count = parseInt(count) - 1;
                if (parseInt(count) == 0) {
                    $('.aa-cart-notify').hide();
                    $('.aa-cart-link').mouseover(function () {
                        return false;
                    });
                } else {
                    $('.aa-cart-notify').html(count);
                }
            }
        }
    } catch (ex) { }
}

function changeUrlLang(lang) {
    var curl = window.location.href;
    if (curl.indexOf('&lang=') != -1) {
        if (slang == '') {
            curl = curl.replace('&lang=', '');
        } else {
            curl = curl.replace('&lang=' + slang, '');
        }
        //Append new..
        curl = curl + '&lang=' + lang;
    } else {
        if (curl.indexOf('?lang=') != -1) {
            curl = curl.replace('?lang=' + slang, '?lang=' + lang);
        } else {
            if (slang == '') {
                curl = curl.replace('?lang=', '');
            } else {
                curl = curl.replace('?lang=' + slang, '');
            }
            //Append new..
            if (curl.indexOf('?') == -1)
                curl = curl + '?lang=' + lang;
            else
                curl = curl + '&lang=' + lang;
        }
    }
    location.href = curl;
}


function ApplySwiperCarousel() {
    try {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 4,
            slidesPerColumn: 2,
            paginationClickable: true,
            spaceBetween: 30,
            breakpoints: {
                1680: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                360: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        });

    } catch (ex) { }
}

myApp.controller('BindFBStreamingPaging', function ($scope, $http) {
    var hdnsecid_FBStreamingPaging = document.getElementById("hdnsecid_FBStreamingPaging").value;
    var hdnevent_FBStreamingPaging = document.getElementById("hdnevent_FBStreamingPaging").value;

    $scope.FBStreamingPagingData = [];
    $scope.itemsPerPage = 8;
    $scope.totalItems = 0;
    getFBStreamingPage(1);
    $scope.pagination = {
        current: 1
    };

    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {

    });

    $scope.pageChangedFBSteaming = function (newPage) {
        getFBStreamingPage(newPage);
    };

    function getFBStreamingPage(pageNumber) {

        var lang = getParameterByName("lang");
        if (lang == undefined) lang = '';
        if (lang == '') lang = 'arab';

        var surl = "http://185.29.46.206/commonapi/footballstreaming.ashx?type=content&pno=" + pageNumber + "&psize=8&lang=" + lang;


        $http.get(surl)
         .then(function (results) {

             $scope.SECTIONIMG = 'images/video-icon.png';

             if (results.data.video == undefined) {
                 document.getElementById("divFBStreaming").setAttribute("style", "display:none");
             } else {
                 var count = results.data.video.length;

                 if (count == undefined) count = '';

                 if (count == '' || count == '0') {
                     document.getElementById("divFBStreaming").setAttribute("style", "display:none");
                 } else {

                     $scope.FBStreamingPagingData = results.data.video;
                     $scope.totalItems = results.data.totalvideos;
                 }
             }

         });


    }

});

myApp.controller("BindFBStreamingPlay", function ($scope, $http, $location) {

    var id = getParameterByName("id");
    var lang = getParameterByName("lang");
    if (lang == undefined) lang = '';
    if (lang == '') lang = 'arab';
    var surl = "http://185.29.46.206/commonapi/footballstreaming.ashx?type=content&pno=1&psize=8&id=" + id + "&lang=" + lang;

    $http.get(surl)
     .then(function (results) {

         $scope.SECTIONIMG = 'images/video-icon.png';

         if (results.data.video == undefined) {
             document.getElementById("divFBStreamingPlay").setAttribute("style", "display:none");
         } else {
             var count = results.data.video.length;

             if (count == undefined) count = '';

             if (count == '' || count == '0') {
                 document.getElementById("divFBStreamingPlay").setAttribute("style", "display:none");
             } else {
                 var data = results.data;
                 if (data.status_code === "0") {
                     $scope.videodata = data.video[0];
                     if (typeof ($scope.videodata) != undefined) {
                         $scope.title = $scope.videodata.title;
                         $scope.vdesc = $scope.videodata.desc;
                         var shtml = ""
                         var count = 0;
                         for (var i = $scope.videodata.sources.length - 1; i >= 0; i--) {

                             if ($scope.videodata.sources[i].type.toString().toLocaleLowerCase() == 'low')
                                 shtml = shtml + "<source type='application/x-mpegURL' src='" + $scope.videodata.sources[i].contsrc + "' data-quality='" + $scope.videodata.sources[i].type + "' default>";
                             else
                                 shtml = shtml + "<source type='" + $scope.videodata.sources[i].vtype + "' src='" + $scope.videodata.sources[i].contsrc + "' data-quality='" + $scope.videodata.sources[i].type + "' >";
                             count++;
                         }
                         $('#player1').html(shtml);

                         //  setTimeout(function () {
                         var mediaElements = document.querySelectorAll('video, audio');
                         for (var i = 0, total = mediaElements.length; i < total; i++) {
                             new MediaElementPlayer(mediaElements[i], {
                                 features: ['playpause', 'current', 'progress', 'duration', 'volume', 'quality', 'fullscreen'],
                             });
                         }
                         //  }, 1000);

                         $('video').attr('poster', $scope.videodata.thumbnail);
                         $('#mep_0').addClass('player');
                         $('#mep_0').addClass('htv');
                         $('#mep_0').addClass('htall');
                         $('.mejs__layer').addClass('videoresp');
                     }
                 } else {
                     // alert(data.status_desc);
                     //OpenDivPopUpFrameHTML(data.status_desc);
                 }

             }
         }

     });

});


myApp.controller("hungamaVideosController", function ($scope, $http) {
    try {
        var event = $('#hdnevent_hungamavideos').val();
        if (event == undefined) event = '';
        var genre = $('#hdngenre_hungamavideos').val();
        if (genre == undefined) genre = '';
        var osid = $('#hdnosid').val();
        if (osid == undefined) osid = '0';
        if (osid == '') osid = '0';
        var userid = $('#hdnencmobno').val();
        if (userid == undefined) userid = '1';
        if (userid == '!ENC_MOBNO!') userid = '1';
        if (userid == '') userid = '1';
        var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=content&genre=' + genre + '&pno=1&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
        $http.get(url).then(function (resp) {
            var data = resp.data;
            if (data == undefined || data == null) {
                $('#hungamaVideos').hide();
                $('#diveventshortz').hide();
            } else {
                if (data.contents == undefined || data.contents == null) {
                    $('#hungamaVideos').hide();
                    $('#diveventshortz').hide();
                } else
                    $scope.videosfeed = data.contents;
            }
        });

        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            var owlhungamavideos = $("#owl-hungamavideos");
            owlhungamavideos.owlCarousel({
                items: 3, //10 items above 1000px browser width
                itemsDesktop: [1000, 3], //5 items between 1000px and 901px
                itemsDesktopSmall: [900, 3], // betweem 900px and 601px
                itemsTablet: [600, 2], //2 items between 600 and 0
                itemsMobile: [320, 1], //2 items between 600 and 0
                //itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
            });
        });

        $scope.getImagePath = function (media) {
            try {
                var res = '';
                /*
                            var obj = media.content;
                            $.each(obj, function (key, val) {
                                var type = obj[key].type;
                                if(type == 'image') {
                                    var w = obj[key].width;
                                    var h = obj[key].height;
                                    if(w != undefined && w != null && h != undefined && h != null) {
                                        if(w == '640' && h == '360')
                                            res = obj[key].url;
                                    }
                                }
                            });    
                            if(res == '')            
                                res = media.thumbnail[1].url;           
                            */
                res = media['image-path-1333'];
                if (res == undefined) res = '';
                if (res == '') {
                    res = media['image-path-1182'];
                    if (res == undefined) res = '';
                }
                if (res == '') {
                    res = media['image-path-1175'];
                    if (res == undefined) res = '';
                }
                if (res == '') {
                    res = media['image-path-39'];
                    if (res == undefined) res = '';
                }
                return res;
            } catch (ex) { }
        }

        $scope.playClip = function (content) {
            var event = $('#hdnevent_hungamavideos').val();
            if (event == undefined) event = '';
            var osid = $('#hdnosid').val();
            if (osid == undefined) osid = '0';
            if (osid == '') osid = '0';
            var userid = $('#hdnencmobno').val();
            if (userid == undefined) userid = '1';
            if (userid == '!ENC_MOBNO!') userid = '1';
            if (userid == '') userid = '1';
            var contentid = content;
            var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=clip&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
            $http.get(url).then(function (resp) {
                var data = resp.data;
                if (data == undefined || data == null) {
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                } else {
                    var url = '';
                    var trailer = data.trailer;
                    if (trailer == undefined) trailer = '';
                    if (trailer != '') {
                        url = trailer.url;
                        if (url == undefined) url = '';
                        if (url == 'NA') url = '';
                    }
                    if (url != '') {

                        //angular.element("#videoplayer")[0].src = url;

                        jwplayer("hungamaplayer").setup({
                            sources: [{
                                file: url
                            }],
                            androidhls: true,
                            fallback: true,
                            autostart: true,
                            width: '100%'
                        });

                        $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                            //document.getElementById("videoplayer").pause();
                            jwplayer("hungamaplayer").stop();
                        });

                        $("#hungamaplayer").bind("contextmenu", function () {
                            return false;
                        });

                        $('#fbstreamplay-modal').modal('show');
                        return false;
                    } else {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    }
                }
            });
        }

        $scope.playVideo = function (content) {
            var substatus = $('#evtshortzsubstatus').val();
            if (substatus == undefined) substatus = '';
            if (substatus == 'Y') {
                var event = $('#hdnevent_hungamavideos').val();
                if (event == undefined) event = '';
                var osid = $('#hdnosid').val();
                if (osid == undefined) osid = '0';
                if (osid == '') osid = '0';
                var userid = $('#hdnencmobno').val();
                if (userid == undefined) userid = '1';
                if (userid == '!ENC_MOBNO!') userid = '1';
                if (userid == '') userid = '1';
                var contentid = content;
                var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=stream&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
                $http.get(url).then(function (resp) {
                    var data = resp.data;
                    if (data == undefined || data == null) {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    } else {
                        var url = data.stream_url;
                        if (url == undefined) url = '';
                        if (url == 'NA') url = '';
                        if (url != '') {

                            //angular.element("#videoplayer")[0].src = url;

                            jwplayer("hungamaplayer").setup({
                                sources: [{
                                    file: url
                                }],
                                androidhls: true,
                                fallback: true,
                                autostart: true,
                                width: '100%'
                            });

                            $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                                //document.getElementById("videoplayer").pause();
                                jwplayer("hungamaplayer").stop();
                            });

                            $("#hungamaplayer").bind("contextmenu", function () {
                                return false;
                            });

                            $('#fbstreamplay-modal').modal('show');
                            return false;
                        } else {
                            $('#fbstreamerror-modal').modal('show');
                            return false;
                        }
                    }
                });

            } else {
                $('#fbstream-modal').modal('show');
                return false;
            }
        }


    } catch (e) { }
});

myApp.controller("hungamaVideos1Controller", function ($scope, $http) {
    try {
        var event = $('#hdnevent_hungamavideos1').val();
        if (event == undefined) event = '';
        var genre = $('#hdngenre_hungamavideos1').val();
        if (genre == undefined) genre = '';
        var osid = $('#hdnosid').val();
        if (osid == undefined) osid = '0';
        if (osid == '') osid = '0';
        var userid = $('#hdnencmobno').val();
        if (userid == undefined) userid = '1';
        if (userid == '!ENC_MOBNO!') userid = '1';
        if (userid == '') userid = '1';
        var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=content&genre=' + genre + '&pno=1&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
        $http.get(url).then(function (resp) {
            var data = resp.data;
            if (data == undefined || data == null) {
                $('#hungamaVideos1').hide();
                $('#diveventshortz').hide();
            } else {
                if (data.contents == undefined || data.contents == null) {
                    $('#hungamaVideos1').hide();
                    $('#diveventshortz').hide();
                } else
                    $scope.videosfeed = data.contents;
            }
        });

        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            var owlhungamavideos = $("#owl-hungamavideos1");
            owlhungamavideos.owlCarousel({
                items: 3, //10 items above 1000px browser width
                itemsDesktop: [1000, 3], //5 items between 1000px and 901px
                itemsDesktopSmall: [900, 3], // betweem 900px and 601px
                itemsTablet: [600, 2], //2 items between 600 and 0
                itemsMobile: [320, 1], //2 items between 600 and 0
                //itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
            });
        });

        $scope.getImagePath = function (media) {
            try {
                var res = '';
                /*
                            var obj = media.content;
                            $.each(obj, function (key, val) {
                                var type = obj[key].type;
                                if(type == 'image') {
                                    var w = obj[key].width;
                                    var h = obj[key].height;
                                    if(w != undefined && w != null && h != undefined && h != null) {
                                        if(w == '640' && h == '360')
                                            res = obj[key].url;
                                    }
                                }
                            });    
                            if(res == '')            
                                res = media.thumbnail[1].url;            
                            */
                res = media['image-path-1333'];
                if (res == undefined) res = '';
                if (res == '') {
                    res = media['image-path-1182'];
                    if (res == undefined) res = '';
                }
                if (res == '') {
                    res = media['image-path-1175'];
                    if (res == undefined) res = '';
                }
                if (res == '') {
                    res = media['image-path-39'];
                    if (res == undefined) res = '';
                }
                return res;
            } catch (ex) { }
        }

        $scope.playClip = function (content) {
            var event = $('#hdnevent_hungamavideos1').val();
            if (event == undefined) event = '';
            var osid = $('#hdnosid').val();
            if (osid == undefined) osid = '0';
            if (osid == '') osid = '0';
            var userid = $('#hdnencmobno').val();
            if (userid == undefined) userid = '1';
            if (userid == '!ENC_MOBNO!') userid = '1';
            if (userid == '') userid = '1';
            var contentid = content;
            var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=clip&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
            $http.get(url).then(function (resp) {
                var data = resp.data;
                if (data == undefined || data == null) {
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                } else {
                    var url = '';
                    var trailer = data.trailer;
                    if (trailer == undefined) trailer = '';
                    if (trailer != '') {
                        url = trailer.url;
                        if (url == undefined) url = '';
                        if (url == 'NA') url = '';
                    }
                    if (url != '') {

                        //angular.element("#videoplayer")[0].src = url;

                        jwplayer("hungamaplayer").setup({
                            sources: [{
                                file: url
                            }],
                            androidhls: true,
                            fallback: true,
                            autostart: true,
                            width: '100%'
                        });

                        $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                            //document.getElementById("videoplayer").pause();
                            jwplayer("hungamaplayer").stop();
                        });

                        $("#hungamaplayer").bind("contextmenu", function () {
                            return false;
                        });

                        $('#fbstreamplay-modal').modal('show');
                        return false;
                    } else {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    }
                }
            });
        }

        $scope.playVideo = function (content) {
            var substatus = $('#evtshortzsubstatus').val();
            if (substatus == undefined) substatus = '';
            if (substatus == 'Y') {
                var event = $('#hdnevent_hungamavideos1').val();
                if (event == undefined) event = '';
                var osid = $('#hdnosid').val();
                if (osid == undefined) osid = '0';
                if (osid == '') osid = '0';
                var userid = $('#hdnencmobno').val();
                if (userid == undefined) userid = '1';
                if (userid == '!ENC_MOBNO!') userid = '1';
                if (userid == '') userid = '1';
                var contentid = content;
                var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=stream&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
                $http.get(url).then(function (resp) {
                    var data = resp.data;
                    if (data == undefined || data == null) {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    } else {
                        var url = data.stream_url;
                        if (url == undefined) url = '';
                        if (url == 'NA') url = '';
                        if (url != '') {

                            //angular.element("#videoplayer")[0].src = url;

                            jwplayer("hungamaplayer").setup({
                                sources: [{
                                    file: url
                                }],
                                androidhls: true,
                                fallback: true,
                                autostart: true,
                                width: '100%'
                            });

                            $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                                //document.getElementById("videoplayer").pause();
                                jwplayer("hungamaplayer").stop();
                            });

                            $("#hungamaplayer").bind("contextmenu", function () {
                                return false;
                            });

                            $('#fbstreamplay-modal').modal('show');
                            return false;
                        } else {
                            $('#fbstreamerror-modal').modal('show');
                            return false;
                        }
                    }
                });

            } else {
                $('#fbstream-modal').modal('show');
                return false;
            }
        }

    } catch (e) { }
});

myApp.controller("hungamaVideos2Controller", function ($scope, $http, $rootScope) {

    try {

        $scope.GetTrendingData = function () {
            var event = $('#hdnevent_hungamavideos2').val();
            if (event == undefined) event = '';
            var genre = $('#hdngenre_hungamavideos2').val();
            if (genre == undefined) genre = '';

            $scope.strType = genre;

            var osid = $('#hdnosid').val();
            if (osid == undefined) osid = '0';
            if (osid == '') osid = '0';
            var userid = $('#hdnencmobno').val();
            if (userid == undefined) userid = '1';
            if (userid == '!ENC_MOBNO!') userid = '1';
            if (userid == '') userid = '1';
            var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=content&genre=' + genre + '&pno=1&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
            $http.get(url).then(function (resp) {
                var data = resp.data;
                if (data == undefined || data == null) {
                    $('#hungamaVideos2').hide();
                    $('#diveventshortz').hide();
                } else {
                    if (data.contents == undefined || data.contents == null) {
                        $('#hungamaVideos2').hide();
                        $('#diveventshortz').hide();
                    } else {
                        $scope.videosfeed = data.contents;
                        //$scope.genretype = genre;
                    }
                }
            });

            $scope.getImagePath = function (media) {
                try {
                    var res = '';
                    /*
                                var obj = media.content;
                                $.each(obj, function (key, val) {
                                    var type = obj[key].type;
                                    if(type == 'image') {
                                        var w = obj[key].width;
                                        var h = obj[key].height;
                                        if(w != undefined && w != null && h != undefined && h != null) {
                                            if(w == '640' && h == '360')
                                                res = obj[key].url;
                                        }
                                    }
                                });    
                                if(res == '')            
                                    res = media.thumbnail[1].url;            
                                */
                    res = media['image-path-1333'];
                    if (res == undefined) res = '';
                    if (res == '') {
                        res = media['image-path-1182'];
                        if (res == undefined) res = '';
                    }
                    if (res == '') {
                        res = media['image-path-1175'];
                        if (res == undefined) res = '';
                    }
                    if (res == '') {
                        res = media['image-path-39'];
                        if (res == undefined) res = '';
                    }
                    return res;
                } catch (ex) { }
            }
        }

        $scope.playClip = function (content) {
            var event = $('#hdnevent_hungamavideos2').val();
            if (event == undefined) event = '';
            var osid = $('#hdnosid').val();
            if (osid == undefined) osid = '0';
            if (osid == '') osid = '0';
            var userid = $('#hdnencmobno').val();
            if (userid == undefined) userid = '1';
            if (userid == '!ENC_MOBNO!') userid = '1';
            if (userid == '') userid = '1';
            var contentid = content;
            var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=clip&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
            $http.get(url).then(function (resp) {
                var data = resp.data;
                if (data == undefined || data == null) {
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                } else {
                    var url = '';
                    var trailer = data.trailer;
                    if (trailer == undefined) trailer = '';
                    if (trailer != '') {
                        url = trailer.url;
                        if (url == undefined) url = '';
                        if (url == 'NA') url = '';
                    }
                    if (url != '') {

                        //angular.element("#videoplayer")[0].src = url;

                        jwplayer("hungamaplayer").setup({
                            sources: [{
                                file: url
                            }],
                            androidhls: true,
                            fallback: true,
                            autostart: true,
                            width: '100%'
                        });

                        $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                            //document.getElementById("videoplayer").pause();
                            jwplayer("hungamaplayer").stop();
                        });

                        $("#hungamaplayer").bind("contextmenu", function () {
                            return false;
                        });

                        $('#fbstreamplay-modal').modal('show');
                        return false;
                    } else {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    }
                }
            });
        }

        $scope.playVideo = function (content) {
            var substatus = $('#evtshortzsubstatus').val();
            if (substatus == undefined) substatus = '';
            if (substatus == 'Y') {
                var event = $('#hdnevent_hungamavideos2').val();
                if (event == undefined) event = '';
                var osid = $('#hdnosid').val();
                if (osid == undefined) osid = '0';
                if (osid == '') osid = '0';
                var userid = $('#hdnencmobno').val();
                if (userid == undefined) userid = '1';
                if (userid == '!ENC_MOBNO!') userid = '1';
                if (userid == '') userid = '1';
                var contentid = content;
                var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=stream&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
                $http.get(url).then(function (resp) {
                    var data = resp.data;
                    if (data == undefined || data == null) {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    } else {
                        var url = data.stream_url;
                        if (url == undefined) url = '';
                        if (url == 'NA') url = '';
                        if (url != '') {

                            //angular.element("#videoplayer")[0].src = url;

                            jwplayer("hungamaplayer").setup({
                                sources: [{
                                    file: url
                                }],
                                androidhls: true,
                                fallback: true,
                                autostart: true,
                                width: '100%'
                            });

                            $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                                //document.getElementById("videoplayer").pause();
                                jwplayer("hungamaplayer").stop();
                            });

                            $("#hungamaplayer").bind("contextmenu", function () {
                                return false;
                            });

                            $('#fbstreamplay-modal').modal('show');
                            return false;
                        } else {
                            $('#fbstreamerror-modal').modal('show');
                            return false;
                        }
                    }
                });

            } else {
                $('#fbstream-modal').modal('show');
                return false;
            }
        }

        $scope.getImagePath = function (media) {
            try {
                var res = '';
                /*
                            var obj = media.content;
                            $.each(obj, function (key, val) {
                                var type = obj[key].type;
                                if(type == 'image') {
                                    var w = obj[key].width;
                                    var h = obj[key].height;
                                    if(w != undefined && w != null && h != undefined && h != null) {
                                        if(w == '640' && h == '360')
                                            res = obj[key].url;
                                    }
                                }
                            });    
                            if(res == '')            
                                res = media.thumbnail[1].url;            
                            */
                res = media['image-path-1333'];
                if (res == undefined) res = '';
                if (res == '') {
                    res = media['image-path-1182'];
                    if (res == undefined) res = '';
                }
                if (res == '') {
                    res = media['image-path-1175'];
                    if (res == undefined) res = '';
                }
                if (res == '') {
                    res = media['image-path-39'];
                    if (res == undefined) res = '';
                }
                return res;
            } catch (ex) { }
        }



    } catch (e) { }

});

myApp.controller("hungamaVideos4Controller", function ($scope, $http, $rootScope) {

    try {

        $scope.GetTrendingData = function () {
            var event = $('#hdnevent_hungamavideos4').val();
            if (event == undefined) event = '';
            var genre = $('#hdngenre_hungamavideos4').val();
            if (genre == undefined) genre = '';

            $scope.strType = genre;

            var osid = $('#hdnosid').val();
            if (osid == undefined) osid = '0';
            if (osid == '') osid = '0';
            var userid = $('#hdnencmobno').val();
            if (userid == undefined) userid = '1';
            if (userid == '!ENC_MOBNO!') userid = '1';
            if (userid == '') userid = '1';
            var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=content&genre=' + genre + '&pno=1&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
            $http.get(url).then(function (resp) {
                var data = resp.data;
                if (data == undefined || data == null) {
                    $('#hungamaVideos2').hide();
                    $('#diveventshortz').hide();
                } else {
                    if (data.contents == undefined || data.contents == null) {
                        $('#hungamaVideos2').hide();
                        $('#diveventshortz').hide();
                    } else {
                        $scope.videosfeed = data.contents;
                        //$scope.genretype = genre;
                    }
                }
            });

            $scope.getImagePath = function (media) {
                try {
                    var res = '';
                    /*
                                var obj = media.content;
                                $.each(obj, function (key, val) {
                                    var type = obj[key].type;
                                    if(type == 'image') {
                                        var w = obj[key].width;
                                        var h = obj[key].height;
                                        if(w != undefined && w != null && h != undefined && h != null) {
                                            if(w == '640' && h == '360')
                                                res = obj[key].url;
                                        }
                                    }
                                });    
                                if(res == '')            
                                    res = media.thumbnail[1].url;            
                                */
                    res = media['image-path-1333'];
                    if (res == undefined) res = '';
                    if (res == '') {
                        res = media['image-path-1182'];
                        if (res == undefined) res = '';
                    }
                    if (res == '') {
                        res = media['image-path-1175'];
                        if (res == undefined) res = '';
                    }
                    if (res == '') {
                        res = media['image-path-39'];
                        if (res == undefined) res = '';
                    }
                    return res;
                } catch (ex) { }
            }
        }

        $scope.playClip = function (content) {
            var event = $('#hdnevent_hungamavideos2').val();
            if (event == undefined) event = '';
            var osid = $('#hdnosid').val();
            if (osid == undefined) osid = '0';
            if (osid == '') osid = '0';
            var userid = $('#hdnencmobno').val();
            if (userid == undefined) userid = '1';
            if (userid == '!ENC_MOBNO!') userid = '1';
            if (userid == '') userid = '1';
            var contentid = content;
            var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=clip&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
            $http.get(url).then(function (resp) {
                var data = resp.data;
                if (data == undefined || data == null) {
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                } else {
                    var url = '';
                    var trailer = data.trailer;
                    if (trailer == undefined) trailer = '';
                    if (trailer != '') {
                        url = trailer.url;
                        if (url == undefined) url = '';
                        if (url == 'NA') url = '';
                    }
                    if (url != '') {

                        //angular.element("#videoplayer")[0].src = url;

                        jwplayer("hungamaplayer").setup({
                            sources: [{
                                file: url
                            }],
                            androidhls: true,
                            fallback: true,
                            autostart: true,
                            width: '100%'
                        });

                        $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                            //document.getElementById("videoplayer").pause();
                            jwplayer("hungamaplayer").stop();
                        });

                        $("#hungamaplayer").bind("contextmenu", function () {
                            return false;
                        });

                        $('#fbstreamplay-modal').modal('show');
                        return false;
                    } else {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    }
                }
            });
        }

        $scope.playVideo = function (content) {
            var substatus = $('#evtshortzsubstatus').val();
            if (substatus == undefined) substatus = '';
            if (substatus == 'Y') {
                var event = $('#hdnevent_hungamavideos2').val();
                if (event == undefined) event = '';
                var osid = $('#hdnosid').val();
                if (osid == undefined) osid = '0';
                if (osid == '') osid = '0';
                var userid = $('#hdnencmobno').val();
                if (userid == undefined) userid = '1';
                if (userid == '!ENC_MOBNO!') userid = '1';
                if (userid == '') userid = '1';
                var contentid = content;
                var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=stream&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
                $http.get(url).then(function (resp) {
                    var data = resp.data;
                    if (data == undefined || data == null) {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    } else {
                        var url = data.stream_url;
                        if (url == undefined) url = '';
                        if (url == 'NA') url = '';
                        if (url != '') {

                            //angular.element("#videoplayer")[0].src = url;

                            jwplayer("hungamaplayer").setup({
                                sources: [{
                                    file: url
                                }],
                                androidhls: true,
                                fallback: true,
                                autostart: true,
                                width: '100%'
                            });

                            $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                                //document.getElementById("videoplayer").pause();
                                jwplayer("hungamaplayer").stop();
                            });

                            $("#hungamaplayer").bind("contextmenu", function () {
                                return false;
                            });

                            $('#fbstreamplay-modal').modal('show');
                            return false;
                        } else {
                            $('#fbstreamerror-modal').modal('show');
                            return false;
                        }
                    }
                });

            } else {
                $('#fbstream-modal').modal('show');
                return false;
            }
        }

        $scope.getImagePath = function (media) {
            try {
                var res = '';
                /*
                            var obj = media.content;
                            $.each(obj, function (key, val) {
                                var type = obj[key].type;
                                if(type == 'image') {
                                    var w = obj[key].width;
                                    var h = obj[key].height;
                                    if(w != undefined && w != null && h != undefined && h != null) {
                                        if(w == '640' && h == '360')
                                            res = obj[key].url;
                                    }
                                }
                            });    
                            if(res == '')            
                                res = media.thumbnail[1].url;            
                            */
                res = media['image-path-1333'];
                if (res == undefined) res = '';
                if (res == '') {
                    res = media['image-path-1182'];
                    if (res == undefined) res = '';
                }
                if (res == '') {
                    res = media['image-path-1175'];
                    if (res == undefined) res = '';
                }
                if (res == '') {
                    res = media['image-path-39'];
                    if (res == undefined) res = '';
                }
                return res;
            } catch (ex) { }
        }



    } catch (e) { }

});

myApp.controller("hungamaVideos3Controller", function ($scope, $http, $rootScope) {
    if (event == undefined) event = ''; $scope.videosfeed = []; $scope.hidePlayIcon = false;
    var genre = getQuerystringValueByName('stype');
    if (genre == undefined || genre == '') genre = 'Action';
    // $scope.genretype = genre;
    var osid = $('#hdnosid').val();
    if (osid == undefined) osid = '0';
    if (osid == '') osid = '0';
    var userid = $('#hdnencmobno').val();
    if (userid == undefined) userid = '1';
    if (userid == '!ENC_MOBNO!') userid = '1';
    if (userid == '') userid = '1';
    var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=bucket&genre='+genre+'&pno=1&userid='+userid+'&osid='+osid+'&event='+event+'&channel=wap&appid=mtn_afg';
    $http.get(url).then(function (resp) {
        var data = resp.data;
        if (resp.data != null) {
            if (resp.data.node != null) {
                if (resp.data.node.data.length > 0) {
                    $scope.videosfeed = resp.data.node.data;
                    // $scope.videosfeed.forEach(ele => ele.genreId = genreId);
                    $scope.genretype = resp.data.node.bucketName;
                    $scope.hidePlayIcon = resp.data.node.data[0].type != "musicVideoTrack";
                }
            }
        }
    });

    $scope.getImagePath = function (media) {
        try {
            var res = '';
            /*
                        var obj = media.content;
                        $.each(obj, function (key, val) {
                            var type = obj[key].type;
                            if(type == 'image') {
                                var w = obj[key].width;
                                var h = obj[key].height;
                                if(w != undefined && w != null && h != undefined && h != null) {
                                    if(w == '640' && h == '360')
                                        res = obj[key].url;
                                }
                            }
                        });    
                        if(res == '')            
                            res = media.thumbnail[1].url;            
                        */
            res = media['image-path-1333'];
            if (res == undefined) res = '';
            if (res == '') {
                res = media['image-path-1182'];
                if (res == undefined) res = '';
            }
            if (res == '') {
                res = media['image-path-1175'];
                if (res == undefined) res = '';
            }
            if (res == '') {
                res = media['image-path-39'];
                if (res == undefined) res = '';
            }
            return res;
        } catch (ex) { }
    }

    $scope.playClip = function (content) {
        var event = $('#hdnevent_hungamavideos2').val();
        if (event == undefined) event = '';
        var osid = $('#hdnosid').val();
        if (osid == undefined) osid = '0';
        if (osid == '') osid = '0';
        var userid = $('#hdnencmobno').val();
        if (userid == undefined) userid = '1';
        if (userid == '!ENC_MOBNO!') userid = '1';
        if (userid == '') userid = '1';
        var contentid = content;
        var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=clip&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
        $http.get(url).then(function (resp) {
            var data = resp.data;
            if (data == undefined || data == null) {
                $('#fbstreamerror-modal').modal('show');
                return false;
            } else {
                var url = '';
                var trailer = data.trailer;
                if (trailer == undefined) trailer = '';
                if (trailer != '') {
                    url = trailer.url;
                    if (url == undefined) url = '';
                    if (url == 'NA') url = '';
                }
                if (url != '') {

                    //angular.element("#videoplayer")[0].src = url;

                    jwplayer("hungamaplayer").setup({
                        sources: [{
                            file: url
                        }],
                        androidhls: true,
                        fallback: true,
                        autostart: true,
                        width: '100%'
                    });

                    $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                        //document.getElementById("videoplayer").pause();
                        jwplayer("hungamaplayer").stop();
                    });

                    $("#hungamaplayer").bind("contextmenu", function () {
                        return false;
                    });

                    $('#fbstreamplay-modal').modal('show');
                    return false;
                } else {
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                }
            }
        });
    }

    $scope.playVideo = function (content) {
        var substatus = $('#evtshortzsubstatus').val();
        if (substatus == undefined) substatus = '';
        if (substatus == 'Y') {
            var event = $('#hdnevent_hungamavideos2').val();
            if (event == undefined) event = '';
            var osid = $('#hdnosid').val();
            if (osid == undefined) osid = '0';
            if (osid == '') osid = '0';
            var userid = $('#hdnencmobno').val();
            if (userid == undefined) userid = '1';
            if (userid == '!ENC_MOBNO!') userid = '1';
            if (userid == '') userid = '1';
            var contentid = content;
            var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=stream&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
            $http.get(url).then(function (resp) {
                var data = resp.data;
                if (data == undefined || data == null) {
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                } else {
                    var url = data.stream_url;
                    if (url == undefined) url = '';
                    if (url == 'NA') url = '';
                    if (url != '') {

                        //angular.element("#videoplayer")[0].src = url;

                        jwplayer("hungamaplayer").setup({
                            sources: [{
                                file: url
                            }],
                            androidhls: true,
                            fallback: true,
                            autostart: true,
                            width: '100%'
                        });

                        $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                            //document.getElementById("videoplayer").pause();
                            jwplayer("hungamaplayer").stop();
                        });

                        $("#hungamaplayer").bind("contextmenu", function () {
                            return false;
                        });

                        $('#fbstreamplay-modal').modal('show');
                        return false;
                    } else {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    }
                }
            });

        } else {
            $('#fbstream-modal').modal('show');
            return false;
        }
    }

});

myApp.controller("LoadActionDataController", function ($scope, $http) {
    $scope.GetData = function (eventData) {
        $scope.videosfeed = [];
        var event = $('#hdnevent_hungamavideos2').val();
        if (event == undefined) event = '';
        var genre = eventData;
        if (genre == undefined) genre = '';
        $scope.$emit("hungamavideos2controller_scope", genre);

    }
});

myApp.controller("LoadActioninHistory", function ($scope, $http) {
    $scope.genretype = getQuerystringValueByName('stype');
});

myApp.controller("hungamaLatestController", function ($scope, $http) {
    $scope.dataTemp = []; $scope.addedGenreId = []; $scope.showViewAll = false;

    $scope.genreList = [
        { Id: 1, genreId: 502, genreName: "Music Videos - Hindi", status: 'A', data: [], isDataShow: false, hidePlayIcon: true },
        { Id: 2, genreId: 503, genreName: "Music Videos - Retro Hindi", status: 'A', data: [], isDataShow: false, hidePlayIcon: true },
        { Id: 3, genreId: 504, genreName: "Ghazals", status: 'A', data: [], isDataShow: false, hidePlayIcon: true },
        { Id: 4, genreId: 510, genreName: "Latest Music Videos", status: 'A', data: [], isDataShow: false, hidePlayIcon: true },
        { Id: 5, genreId: 511, genreName: "Latest In Romance", status: 'A', data: [], isDataShow: false, hidePlayIcon: true },
        { Id: 6, genreId: 499, genreName: "Popular", status: 'A', data: [], isDataShow: false, hidePlayIcon: true },
        { Id: 7, genreId: 500, genreName: "Hungama Picks", status: 'A', data: [], isDataShow: false, hidePlayIcon: true },
        { Id: 8, genreId: 501, genreName: "Showcase - Classic", status: 'A', data: [], isDataShow: false, hidePlayIcon: true }
    ];

    $scope.pageCallBackApi = function () {
        if (getQuerystringValueByName("typxm") == "hungama") {
            $('#langBlock').hide();
        }
        angular.forEach($scope.genreList, function (value, index) {
            $scope.getVideosBasedonGenerew(value.genreId, index);
        });
    }

    $scope.getVideosBasedonGenerew = function (genreId, index) {
        var hevent = $('#hdnevent_hungamavideoslatest').val();
        if (hevent == undefined) hevent = '';
        var surl = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=bucket&genre=' + genreId + '&pno=1&userid=1&osid=0&event=' + hevent + '&channel=wap&appid=mtn_afg';
        $http.get(surl)
         .then(function (results) {
             if (results.data != null) {
                 if (results.data.node != null) {
                     if (results.data.node.data.length > 0) {
                         $scope.genreList[index].data = results.data.node.data;
                         $scope.genreList[index].data.forEach(ele => ele.genreId = genreId);
                         $scope.genreList[index].genreName = results.data.node.bucketName;
                         $scope.genreList[index].hidePlayIcon = results.data.node.data[0].type != "musicVideoTrack";
                         $scope.genreList[index].showViewAll = results.data.node.data.length > 10;
                     }
                     $scope.checkHideDiv(results.data.node.data, genreId);
                 }
             }
         });
    }

    $scope.$on('ngRepeatgenres', function (ngRepeatFinishedEvent) {
        var data = ngRepeatFinishedEvent.targetScope.hungama;
        try {
            if ($scope.addedGenreId.filter(ele => ele == data.genreId).length <= 0) {
                $scope.addedGenreId.push(data.genreId);
                $scope.addSwiperLogic(data.genreId);
            }
        }
        catch (e) { }
    });

    $scope.addSwiperLogic = function (id) {
        var hcontswiper = new Swiper('.hcont-swiper' + id, {
            slidesPerView: 4.25,
            spaceBetween: 15,
            observer: true,
            observeParents: true,
            nextButton: '.swiper-button-next-' + id,
            prevButton: '.swiper-button-prev-' + id,
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1.25,
                    spaceBetween: 10
                },
                // when window width is <= 576px
                576: {
                    slidesPerView: 2.25,
                    spaceBetween: 15
                },
                // when window width is <= 1024px
                1024: {
                    slidesPerView: 3.25,
                    spaceBetween: 15
                }
            }
        });
    }

    $scope.getImagePath = function (media) {
        try {
            var res = '';
            res = media['image-path-1333'];
            if (res == undefined) res = '';
            if (res == '') {
                res = media['image-path-1182'];
                if (res == undefined) res = '';
            }
            if (res == '') {
                res = media['image-path-1175'];
                if (res == undefined) res = '';
            }
            if (res == '') {
                res = media['image-path-39'];
                if (res == undefined) res = '';
            }
            return res;
        } catch (ex) { }
    }

    $scope.playClip = function (content) {
        $('#pageloader').show();
        var event = $('#hdnevent_hungamavideos2').val();
        if (event == undefined) event = '';
        var osid = $('#hdnosid').val();
        if (osid == undefined) osid = '0';
        if (osid == '') osid = '0';
        var userid = $('#hdnencmobno').val();
        if (userid == undefined) userid = '1';
        if (userid == '!ENC_MOBNO!') userid = '1';
        if (userid == '') userid = '1';
        var contentid = content;
        var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=clip&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
        $http.get(url).then(function (resp) {
            var data = resp.data;
            if (data == undefined || data == null) {
                $('#pageloader').hide();
                $('#fbstreamerror-modal').modal('show');
                return false;
            } else {
                var url = '';
                var trailer = data.trailer;
                if (trailer == undefined) trailer = '';
                if (trailer != '') {
                    url = trailer.url;
                    if (url == undefined) url = '';
                    if (url == 'NA') url = '';
                }
                if (url != '') {

                    //angular.element("#videoplayer")[0].src = url;
                    $('#pageloader').hide();
                    jwplayer("hungamaplayer").setup({
                        sources: [{
                            file: url
                        }],
                        androidhls: true,
                        fallback: true,
                        autostart: true,
                        width: '100%'
                    });

                    $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                        //document.getElementById("videoplayer").pause();
                        jwplayer("hungamaplayer").stop();
                    });

                    $("#hungamaplayer").bind("contextmenu", function () {
                        return false;
                    });

                    $('#fbstreamplay-modal').modal('show');
                    return false;
                } else {
                    $('#pageloader').hide();
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                }
            }
        });
    }

    $scope.playVideo = function (content) {
        var substatus = $('#evtshortzsubstatus').val();
        if (substatus == undefined) substatus = '';
        if (substatus == 'Y') {
            var event = $('#hdnevent_hungamavideos2').val();
            if (event == undefined) event = '';
            var osid = $('#hdnosid').val();
            if (osid == undefined) osid = '0';
            if (osid == '') osid = '0';
            var userid = $('#hdnencmobno').val();
            if (userid == undefined) userid = '1';
            if (userid == '!ENC_MOBNO!') userid = '1';
            if (userid == '') userid = '1';
            var contentid = content;
            var url = 'https://imidigital.imimobile.co/commonapi/hungamastreaming.ashx?action=stream&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
            $http.get(url).then(function (resp) {
                var data = resp.data;
                if (data == undefined || data == null) {
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                } else {
                    var url = data.stream_url;
                    if (url == undefined) url = '';
                    if (url == 'NA') url = '';
                    if (url != '') {

                        //angular.element("#videoplayer")[0].src = url;

                        jwplayer("hungamaplayer").setup({
                            sources: [{
                                file: url
                            }],
                            androidhls: true,
                            fallback: true,
                            autostart: true,
                            width: '100%'
                        });

                        $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                            //document.getElementById("videoplayer").pause();
                            jwplayer("hungamaplayer").stop();
                        });

                        $("#hungamaplayer").bind("contextmenu", function () {
                            return false;
                        });

                        $('#fbstreamplay-modal').modal('show');
                        return false;
                    } else {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    }
                }
            });

        } else {
            $('#fbstream-modal').modal('show');
            return false;
        }
    }

    $scope.getSwiperClass = function (id) { return id; }

    $scope.pageCallBackApi();

    $scope.openGenrePreviewPage = function (genreId) {
        window.location.href = "defaultx.aspx?qid="+getQuerystringValueByName("qid")+"&typxm=hungamagenre&lang=engl&stype="+genreId+"&be="+getQuerystringValueByName("typxm")+"";
    }

    $scope.checkHideDiv = function (val, genreId) {
        if (val.length > 0) { $('#hungamaVideosLatest' + genreId).show(); }
        else { $('#hungamaV' + genreId).hide(); }
    }
});


myApp.controller("hungamaPromoPreviewController", function ($scope, $http) {
    $scope.dataTemp = []; $scope.addedGenreId = []; $scope.showViewAll = false;

     

    $scope.pageCallBackApi = function () {
        if (getQuerystringValueByName("typxm") == "hungamapromopreview") {
          //  $('#langBlock').hide();
        }
    }
 
    $scope.playClip = function (content) {
        $('#pageloader').show();
        var event = $('#hdnevent_hungamavideos2').val();
        if (event == undefined) event = '';
        var osid = $('#hdnosid').val();
        if (osid == undefined) osid = '0';
        if (osid == '') osid = '0';
        var userid = $('#hdnencmobno').val();
        if (userid == undefined) userid = '1';
        if (userid == '!ENC_MOBNO!') userid = '1';
        if (userid == '') userid = '1';
        var contentid = content;
        var url = 'https://imidigital.imimobile.co/commonapi_stg/hungamastreaming.ashx?action=clip&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
        $http.get(url).then(function (resp) {
            var data = resp.data;
            if (data == undefined || data == null) {
                $('#pageloader').hide();
                $('#fbstreamerror-modal').modal('show');
                return false;
            } else {
                var url = '';
                var trailer = data.trailer;
                if (trailer == undefined) trailer = '';
                if (trailer != '') {
                    url = trailer.url;
                    if (url == undefined) url = '';
                    if (url == 'NA') url = '';
                }
                if (url != '') {

                    //angular.element("#videoplayer")[0].src = url;
                    $('#pageloader').hide();
                    jwplayer("hungamaplayer").setup({
                        sources: [{
                            file: url
                        }],
                        androidhls: true,
                        fallback: true,
                        autostart: true,
                        width: '100%'
                    });

                    $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                        //document.getElementById("videoplayer").pause();
                        jwplayer("hungamaplayer").stop();
                    });

                    $("#hungamaplayer").bind("contextmenu", function () {
                        return false;
                    });

                    $('#fbstreamplay-modal').modal('show');
                    return false;
                } else {
                    $('#pageloader').hide();
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                }
            }
        });
    }

    $scope.playVideo = function (content) {
        var substatus = $('#evtshortzsubstatus').val();
        if (substatus == undefined) substatus = '';
        if (substatus == 'Y') {
            var event = $('#hdnevent_hungamavideos2').val();
            if (event == undefined) event = '';
            var osid = $('#hdnosid').val();
            if (osid == undefined) osid = '0';
            if (osid == '') osid = '0';
            var userid = $('#hdnencmobno').val();
            if (userid == undefined) userid = '1';
            if (userid == '!ENC_MOBNO!') userid = '1';
            if (userid == '') userid = '1';
            var ci="554q";
            var contentid = content;
            var url = 'https://imidigital.imimobile.co/commonapi/hungamastreaming.ashx?action=stream&cid=' + contentid + '&userid=' + userid + '&osid=' + osid + '&event=' + event + '&channel=wap&appid=mtn_afg';
            $http.get(url).then(function (resp) {
                var data = resp.data;
                if (data == undefined || data == null) {
                    $('#fbstreamerror-modal').modal('show');
                    return false;
                } else {
                    var url = data.stream_url;
                    if (url == undefined) url = '';
                    if (url == 'NA') url = '';
                    if (url != '') {

                        //angular.element("#videoplayer")[0].src = url;

                        jwplayer("hungamaplayer").setup({
                            sources: [{
                                file: url
                            }],
                            androidhls: true,
                            fallback: true,
                            autostart: true,
                            width: '100%'
                        });

                        $('#fbstreamplay-modal').on('hidden.bs.modal', function (e) {
                            //document.getElementById("videoplayer").pause();
                            jwplayer("hungamaplayer").stop();
                        });

                        $("#hungamaplayer").bind("contextmenu", function () {
                            return false;
                        });

                        $('#fbstreamplay-modal').modal('show');
                        return false;
                    } else {
                        $('#fbstreamerror-modal').modal('show');
                        return false;
                    }
                }
            });

        } else {
            $('#fbstream-modal').modal('show');
            return false;
        }
    }

    $scope.getSwiperClass = function (id) { return id; }

    $scope.pageCallBackApi();
 

    $scope.checkHideDiv = function (val, genreId) {
        if (val.length > 0) { $('#hungamaVideosLatest' + genreId).show(); }
        else { $('#hungamaV' + genreId).hide(); }
    }
});