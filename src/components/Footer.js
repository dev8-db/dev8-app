import { Box, Container, Stack, Text, Link, SimpleGrid, Heading } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box
        bg="gray.900"
        color="white"
        py={10}
        className='mt-[130px]'
        >
        <Container maxW="container.lg">
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align="flex-start">
                <Heading as="h4" size="md">私について</Heading>
                <Link href="/about">プロフィール</Link>
                <Link href="/notices">お知らせ</Link>
                <Link href="/contact">お問い合わせ</Link>
            </Stack>
            <Stack align="flex-start">
                <Heading as="h4" size="md">サポート</Heading>
                <Link href="#">利用規約</Link>
                <Link href="#">プライバシーポリシー</Link>
            </Stack>
            <Stack align="flex-start">
                <Heading as="h4" size="md">作品</Heading>
                <Link href="#writings">執筆記事</Link>
                <Link href="#products">プロダクト</Link>
            </Stack>
            <Stack align="flex-start">
                <Heading as="h4" size="md">フォローする</Heading>
                <Link href="https://github.com/develop8-studio">GitHub</Link>
                <Link href="https://x.com/develop8_studio">Twitter</Link>
                <Link href="https://zenn.dev/dev8">Zenn</Link>
            </Stack>
            </SimpleGrid>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="space-between" align="center" mt={10}>
            <Text>&copy; {new Date().getFullYear()} Develop8 Studio. All rights reserved.</Text>
            </Stack>
        </Container>
        </Box>
    )
}