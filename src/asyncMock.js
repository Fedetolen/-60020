const products = [
    {
      id: 1,
      title: 'Remera',
      price: '3000',
      category: 'remeras',
      description: 'talles: XL, L, M, S, XS',
      image: "https://ideogram.ai/assets/image/lossless/response/1m1RNr_-QmWOt5zHH6C_Jg",
    },
    {
      id: 2,
      title: 'Remera',
      price: '3700',
      category: 'remeras',
      description: 'talles: XL, L, M, S, XS',
      image: "https://ideogram.ai/assets/image/lossless/response/loAU8AwFSGCZKbyK5thrbA",
    },
    {
      id: 12,
      title: 'Gorros',
      price: '2000',
      category: 'gorros',
      description: 'talles: 38, 40, 42, 44, 50, 52',
      image:
        "https://ideogram.ai/assets/image/lossless/response/6QL0oh8DRNKmOrwct7hNBA",
    },
    {id: 13,
      title: 'Gorros',
      price: '2500',
      category: 'gorros',
      description: 'talles: 38, 40, 42',
      image:
        "https://ideogram.ai/assets/image/lossless/response/2PeImcA4R2CXa9mEoJQfZg",
    },
    {id: 14,
      title: 'Gorros',
      price: '2750',
      category: 'gorros',
      description: 'talles: 38, 40, 42,44',
      image:
        "https://ideogram.ai/assets/image/lossless/response/G4aZvGfTT12bLjNefQn2pg",
    },
    {
      id: 30,
      title: 'Taza',
      price: '3000',
      category: 'tazas',
      description: 'Colores: amarillo, rojo, azul y verde',
      image:
        'https://ideogram.ai/assets/image/lossless/response/Q2q1OHjeR3WbGP8_3_qVDg',
    },
    {
      id: 31,
      title: 'Taza',
      price: '3200',
      category: 'tazas',
      description: 'Colores: rojo, azul y verde',
      image:
        'https://ideogram.ai/assets/image/lossless/response/_lOCMJvISBKLFb-FAylm2A',
    },
    {
      id: 32,
      title: 'Taza',
      price: '3700',
      category: 'tazas',
      description: 'Colores: Blanca',
      image:
        'https://ideogram.ai/assets/image/lossless/response/8f6wdtNMQcWCarVSVixjSA',
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  
  //falta getCategory -> filter
  