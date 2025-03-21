let imgs = [
    "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/457020109_403401549435474_1116343466431921980_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErbxOxwwQTnRUFGJh_pyFJckQbxmiTe_hyRBvGaJN7-M71Vc9m_BEYyzjkh0h5VhnVHleG9M3oxEc31gcAGDis&_nc_ohc=9Mimzk4JQYcQ7kNvgG1dNI5&_nc_oc=AdiJwqEoQH8lE2iWJwD-Naoc-0GAOOriovPaeP1s2wF-UPLLF79c5W86iW0NrhTNaBo&_nc_zt=23&se=-1&_nc_ht=scontent.ftbs6-2.fna&_nc_gid=0nuR3lvFahK8HSdq73SW8w&oh=00_AYEhSvlV0bU1wEoCgZf_ekG_wx-neUPfWaFWbN2toHSHPg&oe=67DB8A5A",
    "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/480454858_551294914646136_620539911860563074_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGTdmzA7_SDok8fV1KOIxjdK_t64pneJW0r-3rimd4lbbhKTd_9j5Z6rQaWXXnOuSdZS733D7YmovkrSB3udGO_&_nc_ohc=L1SLoWCMMkoQ7kNvgFnzU37&_nc_oc=AdgnzBYV3kw1gG6pvyJLM0XrElMHWSt9VTm9NohpB4MGrvjnZ0boYUT2_9vtfrkTfwg&_nc_zt=23&_nc_ht=scontent.ftbs6-2.fna&_nc_gid=BaiLEKtNBRLVogyEmOdqgw&oh=00_AYHyVd043JTn90NTxA-W5opHc_MFgIAuzjICaXZrDlaxrw&oe=67DBA65D",
    "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/480728045_536404106135217_1450454204465653079_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHsTh2zgmiQ2R1Bamr6UOHaD2TpF1H3AukPZOkXUfcC6aAcx1tcrYmL8BKsHQ6ajRQdFb3olyXdaS9LnNhOXcSc&_nc_ohc=ZQDJsyblgA8Q7kNvgE6z27u&_nc_oc=AdgppdPkxxkdjuZf5c9gQgLTtMsDvDf7OF7lkcdVCaBLaISOeCuH9OFfMgeoFm4JN2Q&_nc_zt=23&_nc_ht=scontent.ftbs6-2.fna&_nc_gid=Nrgjgolgk8QZz1CHUEmGSw&oh=00_AYFnKa51SbeyOq8GrFPzF9Hh3sYpJNhejG8D2bjoFbwXmQ&oe=67DBA130"
];
let num = 0;
function next() {
    num++;
    if (num >= imgs.length) {
        num = 0; 
    }
    document.getElementById("goat").src = imgs[num];
}

function prev() {
    num--;
    if (num < 0) {
        num = imgs.length - 1; 
    }
    document.getElementById("goat").src = imgs[num];
}