import React from 'react';
import {
    Image, Text, VStack, Heading, Card, CardHeader, CardFooter, CardBody, Stack, Button, Highlight, Flex, HStack
} from "@chakra-ui/react";

export default function Articles() {
    const articles = [
        { title: '【Next.js】なぜimgタグではなくnext/imageを使うのか', description: 'なぜnext/imageを使うのか Next.jsの next/image コンポーネントは、画像の最適化と管理を簡単にするために提供されています。例えば、自動的に画面サイズに合わせて画像の大きさを比率を保ったまま調整してくれたり（レスポンシブ画像）、よりファイルサイズが小さいWebPに自動変換してくれたりします。 私が考えるメリットは以下の通りです。 フォーマット変換 next/image を使うと、WebPに対応しているブラウザはPNGやJPEGなどがWebPに変換されます。 実際に next/image で指定した画像にアクセスすると、拡張子が .webp になっていること', url: 'https://zenn.dev/dev8/articles/nextjs_image' },
        { title: 'ドメインを入力してからページが表示されるまでの仕組み', description: 'この記事の概要 この記事では、ドメインを入力してから画面にページが表示されるまでの仕組みを出来るだけわかりやすく解説していきます。 今回解説する一連のプロセスは以下の通りです。 DNSサーバーに接続しドメインに対応するIPアドレスを取得する。 ブラウザがHTTPまたはHTTPSリクエストをサーバーに送信する。 ウェブサーバーがリクエストを受け取りレスポンスを返す。 受け取ったファイルから画面を構築する。（ブラウザレンダリング） DNS まずユーザーが入力したドメインはブラウザからDNSサーバーに送られ、DNSサーバーはドメインに対応したIPアドレスを返します。 DNSとは', url: 'https://zenn.dev/dev8/articles/dns_http_https' },
        { title: 'VercelでのNext.jsデプロイ時のタグ関連エラー対処法', description: '今回起きたエラー Next.jsで自分のWebページを開発していたところ、Vercelにデプロイしようとしてもできないエラーが複数発生しました。<img>タグを使用して画像を表示させていたところ以下のエラーが出ました。', url: 'https://zenn.dev/dev8/articles/error_next_vercel' },
        { title: 'JavaScriptとTypeScriptの違い', description: 'TypeScriptとは TypeScript（略称: TS）は、Microsoftによって開発されたJavaScriptの拡張として開発されたプログラミング言語です。 JavaScriptとTypeScriptの違い JavaScriptとTypeScriptは、型付けに関する重要な違いがあります。 静的な型付け JavaScriptでは、変数や関数の型は実行時に決まります。つまり、コードを実行する際に変数に代入される値の型によって、その変数の型が動的に決定されます。例えば、以下のようなJavaScriptコードを考えてみましょう。 let x = 10; // xは数値型', url: 'https://zenn.dev/dev8/articles/typing_js_ts' },
        { title: 'ベクター画像とラスター画像の違い', description: 'Tech', url: 'https://zenn.dev/dev8/articles/image_magick' },
        { title: 'Gatsby.js 入門', description: 'Tech', url: 'https://zenn.dev/dev8/articles/gatsby_tutorial' }
    ];

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    const handleClick = (url) => {
        window.location.href = url;
    };

    return (
        <Stack textAlign="left" spacing={5} className='w-[90%] md:w-[75%]' direction={{ base: "column", md: "row" }}>
            {articles.slice(0, 4).map((article, index) => (
            <Card
                key={index}
                direction="column"
                variant='outline'
                shadow="sm"
                className="w-[100%] md:w-[1/4] overflow-hidden"
            >
                <CardBody>
                <Heading size='md' className='text-gray-700 h-[40%]'>{article.title}</Heading>
                <Text className='text-gray-500 w-fit-content py-2.5'>
                    {truncateDescription(article.description, 50)}
                </Text>
                </CardBody>
                <CardFooter>
                    <Button
                        variant='solid'
                        colorScheme='blue'
                        className="mt-5"
                        onClick={() => handleClick(article.url)}
                    >
                        Read more
                    </Button>
                </CardFooter>
            </Card>
            ))}
        </Stack>
    )
}