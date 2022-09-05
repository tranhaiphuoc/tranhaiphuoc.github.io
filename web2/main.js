// Fixed navbar after scrolling pass the banner
const mobileWidth = window.matchMedia("(min-width: 1200px)");
const navbar = document.querySelector('.navbar');
const banner = document.querySelector('.banner');
let isOnBanner;

const bannerOption = {};

const bannerObeserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (mobileWidth.matches) {
            if (entry.isIntersecting) {
                navbar.classList.remove('shadow');
                isOnBanner = true;
            } else {
                navbar.classList.add('shadow');
                isOnBanner = false;
            };
        } else {
            if (entry.isIntersecting) {
                isOnBanner = true;
            } else {
                isOnBanner = false;
            };
        }
    });
}, bannerOption);

bannerObeserver.observe(banner);


// Hide side-navigation bar when the width's condition is met
const collapseMobileNav = () => {
    if (mobileWidth.matches) {
        if (isOnBanner === false) {
            navbar.classList.add('shadow');
        };

        if (document.getElementById('overlay')) {
            document.getElementById('overlay').style.display = 'none';
        };
    } else {
        if (isOnBanner === false) {
            navbar.classList.remove('shadow');
        };

        if (document.getElementById('overlay')) {
            document.getElementById('overlay').style.display = 'block';
        };
    };
};
window.addEventListener('resize', collapseMobileNav);


// Toggle the side-navigation bar.
const toggleSideNav = document.querySelector('.toggle');
const primaryNav = document.querySelector('.menu');

toggleSideNav.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
    };

    const div = document.createElement('div');
    div.id = 'overlay';
    div.onclick = () => {
        document.getElementById('overlay').remove();
        primaryNav.setAttribute('data-visible', false);
    };
    document.body.appendChild(div);
});


// Change the language.
const languageText = [

    en = {  // English text.
        navLinkText: ['ホーム', '実績', '採用情報', '当社について', '当社の活動', 'ブログ', 'お問い合わせ'],
        benefitTitle: 'Inspired by: WiDOSOFT.com',
        benefitContentTitle: ['成長', '信念', '品質', '価値'],
        benefitContentDescription: [
            '私たちは、顧客に大きな利益をもたらすために、安定かつ持続した開発環境を構築しています。また、常にお客様のサポート体制を重視しています。',
            '私たちは、顧客の信念と共鳴し、お客様に信頼されることを信念としています。',
            '私たちは品質が商品の良さや満足度につながる要素の一つであることを認識しています。私たちは、品質向上を決して止めないという理念のもと、全てにおいてエクセレンスを目指します。',
            '人間の能力こそが良い価値を生み出します。WiDOSOFTは、すべてのスタッフが進歩していくための最良の場所であると確信しています。'
        ],
        aboutContentTitle: '私たちについて',
        aboutContentDescription: '当社は長年、Webシステム、モバイルアプリケーション、モバイルゲーム、AI開発、AR/VR、Blockchain、デザインアウトソーシングなどのソフトウェアコンサルティング、設計および開発サービスを日本のクライアントに提供してきました。私たちは顧客に安心と満足をもたらすことを約束します。当社は長年、Webシステム、モバイルアプリケーション、モバイルゲーム、AI開発、AR/VR、Blockchain、デザインアウトソーシングなどのソフトウェアコンサルティング、設計および開発サービスを日本のクライアントに提供してきました。私たちは顧客に安心と満足をもたらすことをお約束します。',
        statDescriptionTitle: '統計',
        statDescriptionDesc: '7年にわたり、30以上のクライアントとお仕事をしています',
        statContentDesc1: ['全てのプロジェクト', '経験に基づくスキル', '顧客からの信頼', 'ウェブシステムとモバイルアプリ', 'グラフィックデザイン', 'システム保守'],
        statContentDesc2: ['完了', '完璧', '絶大', 'システム構築', 'ウェブデザイン、ロゴデザイン、記事製作 ...', 'ランタイム'],
        projectTitle: '主なプロジェクト',
        partnerTitle: 'お客様',
        partnerDescripton: '私たちは、最高のサービスとプラットフォームを提供しています。どうぞ安心してお問い合わせください。',
        specialContact: 'お問い合わせ:',
        linkInfo: ['当社について', '採用情報', 'お問い合わせ', '実績', '社の活動']
    },

    jp = {  // Japanese text.
        navLinkText: ['ホーム', '実績', '採用情報', '当社について', '当社の活動', 'ブログ', 'お問い合わせ'],
        benefitTitle: 'Inspired by: WiDOSOFT.com',
        benefitContentTitle: ['成長', '信念', '品質', '価値'],
        benefitContentDescription: [
            '私たちは、顧客に大きな利益をもたらすために、安定かつ持続した開発環境を構築しています。また、常にお客様のサポート体制を重視しています。',
            '私たちは、顧客の信念と共鳴し、お客様に信頼されることを信念としています。',
            '私たちは品質が商品の良さや満足度につながる要素の一つであることを認識しています。私たちは、品質向上を決して止めないという理念のもと、全てにおいてエクセレンスを目指します。',
            '人間の能力こそが良い価値を生み出します。WiDOSOFTは、すべてのスタッフが進歩していくための最良の場所であると確信しています。'
        ],
        aboutContentTitle: '私たちについて',
        aboutContentDescription: '当社は長年、Webシステム、モバイルアプリケーション、モバイルゲーム、AI開発、AR/VR、Blockchain、デザインアウトソーシングなどのソフトウェアコンサルティング、設計および開発サービスを日本のクライアントに提供してきました。私たちは顧客に安心と満足をもたらすことを約束します。当社は長年、Webシステム、モバイルアプリケーション、モバイルゲーム、AI開発、AR/VR、Blockchain、デザインアウトソーシングなどのソフトウェアコンサルティング、設計および開発サービスを日本のクライアントに提供してきました。私たちは顧客に安心と満足をもたらすことをお約束します。',
        statDescriptionTitle: '統計',
        statDescriptionDesc: '7年にわたり、30以上のクライアントとお仕事をしています',
        statContentDesc1: ['全てのプロジェクト', '経験に基づくスキル', '顧客からの信頼', 'ウェブシステムとモバイルアプリ', 'グラフィックデザイン', 'システム保守'],
        statContentDesc2: ['完了', '完璧', '絶大', 'システム構築', 'ウェブデザイン、ロゴデザイン、記事製作 ...', 'ランタイム'],
        projectTitle: '主なプロジェクト',
        partnerTitle: 'お客様',
        partnerDescripton: '私たちは、最高のサービスとプラットフォームを提供しています。どうぞ安心してお問い合わせください。',
        specialContact: 'お問い合わせ:',
        linkInfo: ['当社について', '採用情報', 'お問い合わせ', '実績', '社の活動']
    }
]