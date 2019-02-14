const data = [ // dữ liệu ảnh
    {
        src: "img/product1.jpeg", // duong dan
        alt: "Gemek Premium Thiên đường Bảo Sơn - Mr Dương", // mo ta
        ProjectName: 'Gemek Premium Thiên đường Bảo Sơn', //ten du an
        classFilter: 'home'// phan loai
    },
    {
        src: "img/product2.jpeg",
        alt: "920-Vinaconex 2-Kim Van-Kim Lu",
        ProjectName: '920-Vinaconex 2-Kim Van-Kim Lu',
        classFilter: 'home'
    },
    {
        src: "img/product3.jpeg",
        alt: "Imperia Garden - Nguyễn Tuân",
        ProjectName: 'Imperia Garden - Nguyễn Tuân',
        classFilter: 'home'
    },
    {
        src: "img/product4.jpeg",
        alt: "Project Title",
        ProjectName: 'Project Name2',
        classFilter: 'office'
    },
    {
        src: "img/product5.jpeg",
        alt: "Văn Xuân Office",
        ProjectName: 'Văn Xuân Office',
        classFilter: 'office'
    },
    {
        src: "img/product7.jpeg",
        alt: "BIDV Tower",
        ProjectName: 'BIDV Tower',
        classFilter: 'office'
    },
    {
        src: "img/product8.jpeg",
        alt: "Daehan Motor",
        ProjectName: 'Daehan Motor',
        classFilter: 'office'
    },
    {
        src: "img/product9.jpeg",
        alt: "Bornga Restaurant",
        ProjectName: 'Bornga Restaurant',
        classFilter: 'restaurant'
    },
    {
        src: "img/product10.jpeg",
        alt: "I-Garden",
        ProjectName: 'I-Garden',
        classFilter: 'office'
    },
    {
        src: "img/product11.jpeg",
        alt: "Koryo Restaurant",
        ProjectName: 'Koryo Restaurant',
        classFilter: 'restaurant'
    },
    {
        src: "img/product12.jpeg",
        alt: "Office Design",
        ProjectName: 'Office Design',
        classFilter: 'office'
    },
    {
        src: "img/product13.jpeg",
        alt: "Koryo Restaurant",
        ProjectName: 'Koryo Restaurant',
        classFilter: 'restaurant'
    },
    {
        src: "img/product14.jpeg",
        alt: "Kitchen Room",
        ProjectName: 'Kitchen Room',
        classFilter: 'home'
    },
    {
        src: "img/product16.jpeg",
        alt: "The Restaurant",
        ProjectName: 'The Restaurant',
        classFilter: 'restaurant'
    },
    {
        src: "img/product17.jpeg",
        alt: "The Restaurant",
        ProjectName: 'The Restaurant',
        classFilter: 'restaurant'
    },
    {
        src: "img/product18.jpeg",
        alt: "The Restaurant",
        ProjectName: 'The Restaurant',
        classFilter: 'restaurant'
    },
    // {
    //     src: "img/design1.jpg",
    //     alt: "Project Title",
    //     ProjectName: 'Project Name2',
    //     classFilter: 'restaurant'
    // },
    // {
    //     src: "img/design2.jpg",
    //     alt: "Project Title",
    //     ProjectName: 'Project Name2',
    //     classFilter: 'restaurant'
    // },
    // {
    //     src: "img/design3.jpg",
    //     alt: "Project Title",
    //     ProjectName: 'Project Name2',
    //     classFilter: 'restaurant'
    // },
    // {
    //     src: "img/design4.jpg",
    //     alt: "Project Title",
    //     ProjectName: 'Project Name2',
    //     classFilter: 'restaurant'
    // },
    // {
    //     src: "img/design5.jpg",
    //     alt: "Project Title",
    //     ProjectName: 'Project Name2',
    //     classFilter: 'restaurant'
    // },
    // {
    //     src: "img/design6.jpg",
    //     alt: "Project Title",
    //     ProjectName: 'Project Name2',
    //     classFilter: 'restaurant'
    // },
    {
        src: "img/3D.jpg",
        alt: "Phòng Ngủ - Mr Hà",
        ProjectName: 'Phòng Ngủ - Mr Hà',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_1.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_2.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_3.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_4.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_5.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_6.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_7.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_8.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_9.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_10.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/1102d_tan_mai_11.jpg",
        alt: "1102D Tân Mai",
        ProjectName: '1102D Tân Mai',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_1.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_2.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_3.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_4.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_5.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_6.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_7.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_8.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_9.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_10.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_11.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/biet_thu_bac_ninh_11.jpg",
        alt: "Biệt Thự Bắc Ninh",
        ProjectName: 'Biệt Thự Bắc Ninh',
        classFilter: 'home'
    },
    {
        src: "img/dexom_haiduong_1.jpg",
        alt: "Dê Xồm Hải Dương",
        ProjectName: 'Dê Xồm Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/dexom_haiduong_2.jpg",
        alt: "Dê Xồm Hải Dương",
        ProjectName: 'Dê Xồm Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/dexom_haiduong_3.jpg",
        alt: "Dê Xồm Hải Dương",
        ProjectName: 'Dê Xồm Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/dexom_haiduong_4.jpg",
        alt: "Dê Xồm Hải Dương",
        ProjectName: 'Dê Xồm Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/dexom_haiduong_5.jpg",
        alt: "Dê Xồm Hải Dương",
        ProjectName: 'Dê Xồm Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/dexom_haiduong_6.jpg",
        alt: "Dê Xồm Hải Dương",
        ProjectName: 'Dê Xồm Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/dexom_haiduong_7.jpg",
        alt: "Dê Xồm Hải Dương",
        ProjectName: 'Dê Xồm Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/dexom_haiduong_8.jpg",
        alt: "Dê Xồm Hải Dương",
        ProjectName: 'Dê Xồm Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/dexom_haiduong.jpg",
        alt: "Dê Xồm Hải Dương",
        ProjectName: 'Dê Xồm Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/hoi_truong_cu_khe_thanh_oai_hn_1.jpg",
        alt: "Hội Trường Cự Khê",
        ProjectName: 'Hội Trường Cự Khê',
        classFilter: 'home'
    },
    {
        src: "img/hoi_truong_cu_khe_thanh_oai_hn_2.jpg",
        alt: "Hội Trường Cự Khê",
        ProjectName: 'Hội Trường Cự Khê',
        classFilter: 'home'
    },
    {
        src: "img/hoi_truong_cu_khe_thanh_oai_hn_3.jpg",
        alt: "Hội Trường Cự Khê",
        ProjectName: 'Hội Trường Cự Khê',
        classFilter: 'home'
    },
    {
        src: "img/hoi_truong_cu_khe_thanh_oai_hn_4.jpg",
        alt: "Hội Trường Cự Khê",
        ProjectName: 'Hội Trường Cự Khê',
        classFilter: 'home'
    },
    {
        src: "img/hoi_truong_cu_khe_thanh_oai_hn_5.jpg",
        alt: "Hội Trường Cự Khê",
        ProjectName: 'Hội Trường Cự Khê',
        classFilter: 'home'
    },
    {
        src: "img/hoi_truong_cu_khe_thanh_oai_hn_6.jpg",
        alt: "Hội Trường Cự Khê",
        ProjectName: 'Hội Trường Cự Khê',
        classFilter: 'home'
    },
    {
        src: "img/hoi_truong_cu_khe_thanh_oai_hn_7.jpg",
        alt: "Hội Trường Cự Khê",
        ProjectName: 'Hội Trường Cự Khê',
        classFilter: 'home'
    },
    {
        src: "img/hoi_truong_cu_khe_thanh_oai_hn.jpg",
        alt: "Hội Trường Cự Khê",
        ProjectName: 'Hội Trường Cự Khê',
        classFilter: 'home'
    },
    {
        src: "img/kcn_tienson_bac_ninh_2.jpg",
        alt: "KCN Tiên Sơn",
        ProjectName: 'KCN Tiên Sơn',
        classFilter: 'home'
    },
    {
        src: "img/kcn_tienson_bac_ninh_3.jpg",
        alt: "KCN Tiên Sơn",
        ProjectName: 'KCN Tiên Sơn',
        classFilter: 'home'
    },
    {
        src: "img/kcn_tienson_bac_ninh_4.jpg",
        alt: "KCN Tiên Sơn",
        ProjectName: 'KCN Tiên Sơn',
        classFilter: 'home'
    },
    {
        src: "img/kcn_tienson_bac_ninh_5.jpg",
        alt: "KCN Tiên Sơn",
        ProjectName: 'KCN Tiên Sơn',
        classFilter: 'home'
    },
    {
        src: "img/kcn_tienson_bac_ninh_6.jpg",
        alt: "KCN Tiên Sơn",
        ProjectName: 'KCN Tiên Sơn',
        classFilter: 'home'
    },
    {
        src: "img/kcn_tienson_bac_ninh_7.jpg",
        alt: "KCN Tiên Sơn",
        ProjectName: 'KCN Tiên Sơn',
        classFilter: 'home'
    },
    {
        src: "img/kcn_tienson_bac_ninh.jpg",
        alt: "KCN Tiên Sơn",
        ProjectName: 'KCN Tiên Sơn',
        classFilter: 'home'
    },
    {
        src: "img/kcn_tienson_bac_ninh.jpg",
        alt: "KCN Tiên Sơn",
        ProjectName: 'KCN Tiên Sơn',
        classFilter: 'home'
    },
    {
        src: "img/nha_rieng_hd_1.jpg",
        alt: "Nhà Riêng Hải Dương",
        ProjectName: 'Nhà Riêng Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/nha_rieng_hd_2.jpg",
        alt: "Nhà Riêng Hải Dương",
        ProjectName: 'Nhà Riêng Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/nha_rieng_hd_3.jpg",
        alt: "Nhà Riêng Hải Dương",
        ProjectName: 'Nhà Riêng Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/nha_rieng_hd_4.jpg",
        alt: "Nhà Riêng Hải Dương",
        ProjectName: 'Nhà Riêng Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/nha_rieng_hd_5.jpg",
        alt: "Nhà Riêng Hải Dương",
        ProjectName: 'Nhà Riêng Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/nha_rieng_hd_6.jpg",
        alt: "Nhà Riêng Hải Dương",
        ProjectName: 'Nhà Riêng Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/nha_rieng_hd_7.jpg",
        alt: "Nhà Riêng Hải Dương",
        ProjectName: 'Nhà Riêng Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/nha_rieng_hd.jpg",
        alt: "Nhà Riêng Hải Dương",
        ProjectName: 'Nhà Riêng Hải Dương',
        classFilter: 'home'
    },
    {
        src: "img/vp_bo_tham_muu_so4_dinh_cong_trang_hn_1.jpg",
        alt: "VP Bộ Tham Mưu",
        ProjectName: 'VP Bộ Tham Mưu',
        classFilter: 'home'
    },
    {
        src: "img/vp_bo_tham_muu_so4_dinh_cong_trang_hn_2.jpg",
        alt: "VP Bộ Tham Mưu",
        ProjectName: 'VP Bộ Tham Mưu',
        classFilter: 'home'
    },
    {
        src: "img/vp_bo_tham_muu_so4_dinh_cong_trang_hn_3.jpg",
        alt: "VP Bộ Tham Mưu",
        ProjectName: 'VP Bộ Tham Mưu',
        classFilter: 'home'
    },
    {
        src: "img/vp_bo_tham_muu_so4_dinh_cong_trang_hn_5.jpg",
        alt: "VP Bộ Tham Mưu",
        ProjectName: 'VP Bộ Tham Mưu',
        classFilter: 'home'
    },
    {
        src: "img/vp_bo_tham_muu_so4_dinh_cong_trang_hn.jpg",
        alt: "VP Bộ Tham Mưu",
        ProjectName: 'VP Bộ Tham Mưu',
        classFilter: 'home'
    }
]

export default data;