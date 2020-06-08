
export default {
    path:'/movie',
    component:()=>import('@/views/Movie'),
    children:[
        {
            path:'city',
            component:()=>import('@/components/City')
        },
        {
            path:'nowPlaying',
            component:()=>import('@/components/NowPlaying')
        },
        {
            path:'comming',
            component:()=>import('@/components/Comming')
        },
        {
            path:'search',
            component:()=>import('@/components/Search')
        },
        {
            path: '/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}
