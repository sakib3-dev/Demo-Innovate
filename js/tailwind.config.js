tailwind.config = {
    theme: {
      extend: {
        // color part start 
        colors: {
          headerOverlay: "rgba(22, 12, 109, 0.5)",
          hoverColor: "#1BBF00",
          iconArrewhoverColor: "rgba(25, 191, 0, 0.4)",
          headerTextColor:"#EFF4FA",
          pricingHoverColor:"#E6E5F3",
          homeOverlay:"rgba(106, 98, 197, 0.9)",
          cH4Color:"#141135",
          contactColor:"#726E9E",
          serviceCard:"#6B62C5",
          ratingT:"#141135",
          starColor:"#FF7628",
          sliderH3Color:"#221A2C",
          footerColor:"#48409C",
          footerContentColor:"#FEFEFE",
          readMoreBg:"rgba(255, 255, 255, 0.3)",
        },
        // color part end

        // container part start
        
        width: {
            mainContainer: '1170px',
            bannerContainer: '962px',
            contactContainer: '1147px',
            ratingContainer: '1079px',
            reviewContainer: '1408px',
            blogContainer: '982px',
          },
        
        // container part end

        // font family part start

        fontFamily: {
            titleFontFamily: ["Open, Sans"],
            contentFontFamily: ["Paprika, cursive"],
            nunito: ["Nunito, sans-serif"],
            quickSand: ["Quicksand, sans-serif"],
          },

        // font family part end

        // banner images part start
        
        backgroundImage: {
            homeBg: "url('images/image.png')",
            counterBg: "url('images/counter-bg.png')" ,
            contactBg: "url('images/contact-bg.png')" ,
            ratingBg: "url('images/rating-bg.png')",
            blogBg: "url('images/blog-bg.png')",
          },
        
        // banner images part end

        // box shadow start
        
        boxShadow: {
          sliderBoxShadow: ' -15px 30px 50px 0px rgba(171, 175, 199, 0.60)',
        }
        
        // box shadow end 

        
      },
    },
  }