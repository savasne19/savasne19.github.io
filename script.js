    // script.js

    document.addEventListener('DOMContentLoaded', () => {
        console.log('Script loaded and DOM content parsed!'); // デバッグ用ログ

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        // モバイルメニューの開閉ロジック
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // ページ内アンカーリンクへのスムーズスクロール
        // hrefが"#"で始まるリンクのみを対象とします
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // デフォルトのジャンプ動作を防止

                const targetId = this.getAttribute('href').substring(1); // "#"を除いたIDを取得
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // スムーズにスクロール
                    });
                    console.log(`Smooth scrolling to: #${targetId}`); // デバッグ用ログ
                } else {
                    console.log(`Target element #${targetId} not found for smooth scroll.`); // デバッグ用ログ
                }

                // リンククリック後にモバイルメニューが開いていれば閉じる
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // 他のHTMLファイルへのリンク（例: products-list.html, how-to-order.htmlなど）については、
        // 特別なJavaScriptは不要です。ブラウザのデフォルトの動作でページ遷移が行われます。
        // 以前のスクリプトでは、特定のセレクタがこれらのリンクの動作を妨げていました。
    });
