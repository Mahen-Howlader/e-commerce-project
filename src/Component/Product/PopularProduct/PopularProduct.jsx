const popularProduct = [
    {
      "Gender": "Men",
      "ProductName": "Men's Classic Fit Shirt",
      "Category": "Shirts",
      "Price": 29.99,
      "DiscountPrice": 24.99,
      "Brand": "Ralph Lauren",
      "Size": "M",
      "Color": "Blue",
      "Material": "Cotton",
      "Rating": 4.5,
      "PrimaryImageURL": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "AlternateImageURLs": [
        "https://example.com/images/shirt1_alt1.jpghttps://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        "https://example.com/images/shirt1_alt2.jpghttps://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2hpcnRzfGVufDB8fDB8fHww"
      ]
    },
    {
      "Gender": "Men",
      "ProductName": "Slim Fit Jeans",
      "Category": "Jeans",
      "Price": 49.99,
      "DiscountPrice": 39.99,
      "Brand": "Levi's",
      "Size": 32,
      "Color": "Black",
      "Material": "Denim",
      "Rating": 4.7,
      "PrimaryImageURL": "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SmVhbnN8ZW58MHx8MHx8fDA%3D",
      "AlternateImageURLs": [
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmVhbnN8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1691367278870-da950c3c384b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SmVhbnN8ZW58MHx8MHx8fDA%3D"
      ]
    },
    {
      "Gender": "Men",
      "ProductName": "Casual Sneakers",
      "Category": "Shoes",
      "Price": 59.99,
      "DiscountPrice": 49.99,
      "Brand": "Nike",
      "Size": 10,
      "Color": "White",
      "Material": "Leather",
      "Rating": 4.8,
      "PrimaryImageURL": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2hvZXN8ZW58MHx8MHx8fDA%3D",
      "AlternateImageURLs": [
        "https://media.istockphoto.com/id/1436871415/photo/3d-illustration.webp?s=170667a&w=0&k=20&c=HaHH7raYDWBZqPvc35QUTGKsnGcI2vQZUtwbNmwYfXs=",
        "https://media.istockphoto.com/id/1172094442/photo/standing-on-top-of-each-other-gray-sneakers-on-a-blue-and-pink-background.webp?s=170667a&w=0&k=20&c=5x4XR_-uqlO1iNHl2fanL7dsL6y1XdILegjr-8hdunQ="
      ]
    },
    {
      "Gender": "Men",
      "ProductName": "Hooded Sweatshirt",
      "Category": "Sweaters",
      "Price": 39.99,
      "DiscountPrice": 34.99,
      "Brand": "Adidas",
      "Size": "L",
      "Color": "Grey",
      "Material": "Fleece",
      "Rating": 4.6,
      "PrimaryImageURL": "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3dlYXRlcnN8ZW58MHx8MHx8fDA%3D",
      "AlternateImageURLs": [
        "https://images.unsplash.com/photo-1612629779374-a8432d338af5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3dlYXRlcnN8ZW58MHx8MHx8fDA%3D",
        "hhttps://plus.unsplash.com/premium_photo-1661403908411-7d31ea3c8d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3dlYXRlcnN8ZW58MHx8MHx8fDA%3D"
      ]
    },
    {
      "Gender": "Men",
      "ProductName": "Bomber Jacket",
      "Category": "Jackets",
      "Price": 89.99,
      "DiscountPrice": 79.99,
      "Brand": "Tommy Hilfiger",
      "Size": "M",
      "Color": "Green",
      "Material": "Polyester",
      "Rating": 4.9,
      "PrimaryImageURL": "https://plus.unsplash.com/premium_photo-1671030274122-b6ac34f87b8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SmFja2V0c3xlbnwwfHwwfHx8MA%3D%3D",
      "AlternateImageURLs": [
        "https://images.unsplash.com/photo-1533230464445-e01ef07c65c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEphY2tldHN8ZW58MHx8MHx8fDA%3D",
        "https://media.istockphoto.com/id/1308256250/photo/young-housewife-looks-on-a-down-jacket-before-washing.webp?b=1&s=170667a&w=0&k=20&c=6gl6vEdXmG0haAn-cszSvQkOd9Lw12w_gSKVdJmxemo="
      ]
    },
    {
      "Gender": "Women",
      "ProductName": "Women's Summer Dress",
      "Category": "Dresses",
      "Price": 39.99,
      "DiscountPrice": 34.99,
      "Brand": "Zara",
      "Size": "S",
      "Color": "Red",
      "Material": "Cotton",
      "Rating": 4.8,
      "PrimaryImageURL": "https://example.com/images/dress1.jpg",
      "AlternateImageURLs": [
        "https://example.com/images/dress1_alt1.jpg",
        "https://example.com/images/dress1_alt2.jpg"
      ]
    },
    {
      "Gender": "Women",
      "ProductName": "High Heel Sandals",
      "Category": "Shoes",
      "Price": 59.99,
      "DiscountPrice": 49.99,
      "Brand": "Steve Madden",
      "Size": 7,
      "Color": "Black",
      "Material": "Leather",
      "Rating": 4.7,
      "PrimaryImageURL": "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "AlternateImageURLs": [
        "https://media.istockphoto.com/id/466532054/photo/shoes.webp?s=170667a&w=0&k=20&c=sYrxoElh_6wdlzVxHPgrKWAdIqMd_pYXTY399j6a4J8=",
        "https://media.istockphoto.com/id/511523212/photo/womens-shoes-and-bags.webp?s=170667a&w=0&k=20&c=nO5kWY0-6S2XAeIqE6BOIrSk0ZMWJLxRnAdhRRIezQo="
      ]
    },
    {
      "Gender": "Women",
      "ProductName": "Leather Handbag",
      "Category": "Accessories",
      "Price": 129.99,
      "DiscountPrice": 109.99,
      "Brand": "Michael Kors",
      "Size": "One Size",
      "Color": "Brown",
      "Material": "Leather",
      "Rating": 4.9,
      "PrimaryImageURL": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      "AlternateImageURLs": [
        "https://plus.unsplash.com/premium_photo-1681276170683-706111cf496e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1668062993549-8167c11d6e7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEFjY2Vzc29yaWVzfGVufDB8fDB8fHww"
      ]
    },
    {
      "Gender": "Women",
      "ProductName": "Silk Scarf",
      "Category": "Accessories",
      "Price": 29.99,
      "DiscountPrice": 24.99,
      "Brand": "Hermès",
      "Size": "One Size",
      "Color": "Multicolor",
      "Material": "Silk",
      "Rating": 4.8,
      "PrimaryImageURL": "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600",
      "AlternateImageURLs": [
        "https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/8534140/pexels-photo-8534140.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      ]
    },
    {
      "Gender": "Women",
      "ProductName": "Evening Gown",
      "Category": "Dresses",
      "Price": 199.99,
      "DiscountPrice": 179.99,
      "Brand": "Vera Wang",
      "Size": "M",
      "Color": "Black",
      "Material": "Silk",
      "Rating": 4.9,
      "PrimaryImageURL": "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600",
      "AlternateImageURLs": [
        "https://images.pexels.com/photos/821413/pexels-photo-821413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/424706/pexels-photo-424706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      ]
    },
    {
      "Gender": "Kids",
      "ProductName": "Kids' T-Shirt",
      "Category": "T-Shirts",
      "Price": 19.99,
      "DiscountPrice": 14.99,
      "Brand": "Gap Kids",
      "Size": "XS",
      "Color": "Yellow",
      "Material": "Cotton",
      "Rating": 4.6,
      "PrimaryImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_HT7KfR462-lTdFvAzGdyG5sG1eEEycgmg&s",
      "AlternateImageURLs": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fzf_d7DcEomhvzVHIhP16lxWQhZeFmbUBA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8feoUVc9cyyPv4kEiQqoLHqMAlp-LJr9BQ&s"
      ]
    },
    {
      "Gender": "Kids",
      "ProductName": "Kids' Sneakers",
      "Category": "Shoes",
      "Price": 29.99,
      "DiscountPrice": 24.99,
      "Brand": "Adidas",
      "Size": 3,
      "Color": "Red",
      "Material": "Synthetic",
      "Rating": 4.7,
      "PrimaryImageURL": "https://rukminim2.flixcart.com/image/450/500/xif0q/shopsy-kids-shoe/j/d/e/7c-shp-brd-sh-1155-birde-original-imahyg9xsdy2yegj.jpeg?q=90&crop=false",
      "AlternateImageURLs": [
        "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1776,f_auto,q_auto/https://www.allbirds.eu/cdn/shop/products/AB00F0T_SHOE_PROFILE_GLOBAL_TODDLER_SMALLBIRDS_WOOL_RUNNER_BLOOM_PINK_BLOOM_PINK.png?v=1678740811",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0P8rM1xg66uuchd2OXp4CBBa6cbXEojyXVpBphEPdypxIR4QkigWUQ0NkriRill5Wrvk&usqp=CAU"
      ]
    },
    {
      "Gender": "Kids",
      "ProductName": "Kids' Winter Coat",
      "Category": "Jackets",
      "Price": 59.99,
      "DiscountPrice": 49.99,
      "Brand": "The North Face",
      "Size": "M",
      "Color": "Blue",
      "Material": "Polyester",
      "Rating": 4.8,
      "PrimaryImageURL": "https://img.cdn.mountainwarehouse.com/product/053103/053103_kha_seasons_2_kids_padded_jacket_kid_ecom_lifestyle_ss24_01.jpg",
      "AlternateImageURLs": [
        "https://contents.mediadecathlon.com/p2407153/k$89b5f3f33685c7804c1dd05c3771ef54/picture.jpg?format=auto&f=3000x0",
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/834fc3ee-936a-47ec-b7e6-7e7648846c5d/little-kids-dobby-windbreaker-QJRRhj.png"
      ]
    },
    {
      "Gender": "Kids",
      "ProductName": "Kids' Backpack",
      "Category": "Accessories",
      "Price": 24.99,
      "DiscountPrice": 19.99,
      "Brand": "Disney",
      "Size": "One Size",
      "Color": "Pink",
      "Material": "Polyester",
      "Rating": 4.5,
      "PrimaryImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69U6RNE6KzjjEoYkvZ8ZCuvMLb7dXR2VYpA&s",
      "AlternateImageURLs": [
        "https://www.sassandbelle.co.uk/Images/Product/Alternative/medium/BAG011_B.jpg",
        "https://www.sassandbelle.co.uk/Images/Product/Alternative/medium/BAG011_B.jpg",
      ]
    },
    {
      "Gender": "Kids",
      "ProductName": "Kids' Pajamas",
      "Category": "Sleepwear",
      "Price": 14.99,
      "DiscountPrice": 11.99,
      "Brand": "Carter's",
      "Size": "S",
      "Color": "Green",
      "Material": "Cotton",
      "Rating": 4.8,
      "PrimaryImageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_nziR8E173PuNdKQQZdLc6-KU6M_mFFFiw&s",
      "AlternateImageURLs": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7WafJzAy6Bvs1WZ3eyqNfwgBuO8XWDVMvA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7WafJzAy6Bvs1WZ3eyqNfwgBuO8XWDVMvA&s",
      ]
    }
  ];
  