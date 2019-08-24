const initState = {
  builds: {
    florentine: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 1, weight: 30, cost: 0.7 },
        pork: { count: 2, weight: 30, cost: 0.9 },
        mushroom: { count: 1, weight: 50, cost: 0.5 },
        "green-onion": { count: 1, weight: 30, cost: 0.5 },
        "ranch-sauce": { count: 1, weight: 30, cost: 0.2 }
      },
      weight: 650,
      cost: 6.99,
      diameter: 35
    },
    appetizing: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        bacon: { count: 1, weight: 30, cost: 0.8 },
        chicken: { count: 1, weight: 30, cost: 0.6 },
        "barbecue-sauce": { count: 1, weight: 30, cost: 0.2 },
        cherry: { count: 1, weight: 30, cost: 0.5 }
      },
      weight: 570,
      cost: 5,
      diameter: 35
    },
    pepperoni: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 1, weight: 30, cost: 0.7 },
        onion: { count: 1, weight: 30, cost: 0.2 },
        chili: { count: 1, weight: 30, cost: 0.99 },
        sausage: { count: 1, weight: 40, cost: 0.4 },
        "marinated-pepper": { count: 1, weight: 30, cost: 0.5 }
      },
      weight: 610,
      cost: 5.99,
      diameter: 35
    },
    fiery: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        bacon: { count: 1, weight: 30, cost: 0.8 },
        pork: { count: 1, weight: 30, cost: 0.9 },
        chili: { count: 1, weight: 30, cost: 0.99 },
        jalapeo: { count: 1, weight: 30, cost: 0.7 },
        "spicy-sauce": { count: 1, weight: 30, cost: 0.2 },
        "marinated-onion": { count: 1, weight: 30, cost: 0.7 }
      },
      weight: 580,
      cost: 6.59,
      diameter: 35
    },
    romeo: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 1, weight: 30, cost: 0.7 },
        pork: { count: 2, weight: 30, cost: 0.9 },
        "ranch-sauce": { count: 1, weight: 30, cost: 0.2 }
      },
      weight: 570,
      cost: 5.6,
      diameter: 35
    },
    special: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 1, weight: 30, cost: 0.7 },
        mushroom: { count: 1, weight: 50, cost: 0.4 },
        jalapeo: { count: 1, weight: 30, cost: 0.7 },
        "black-olives": { count: 1, weight: 30, cost: 0.4 },
        sausage: { count: 1, weight: 40, cost: 0.4 }
      },
      weight: 630,
      cost: 5.8,
      diameter: 35
    },
    hunters: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        bacon: { count: 1, weight: 30, cost: 0.8 },
        beef: { count: 1, weight: 30, cost: 0.9 },
        onion: { count: 1, weight: 30, cost: 0.2 },
        mushroom: { count: 1, weight: 50, cost: 0.4 },
        chili: { count: 1, weight: 30, cost: 0.99 },
        "spicy-sauce": { count: 1, weight: 30, cost: 0.2 }
      },
      weight: 650,
      cost: 6.69,
      diameter: 35
    },
    venetian: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 2, weight: 30, cost: 0.7 },
        lemon: { count: 1, weight: 30, cost: 0.3 },
        shrimps: { count: 1, weight: 30, cost: 0.9 }
      },
      weight: 570,
      cost: 5.8,
      diameter: 35
    },
    sorento: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        bacon: { count: 1, weight: 30, cost: 0.8 },
        beef: { count: 2, weight: 30, cost: 0.9 },
        "barbecue-sauce": { count: 1, weight: 30, cost: 0.2 },
        "marinated-pepper": { count: 1, weight: 30, cost: 0.5 }
      },
      weight: 600,
      cost: 6.5,
      diameter: 35
    },
    marinara: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        lemon: { count: 1, weight: 30, cost: 0.3 },
        shrimps: { count: 1, weight: 30, cost: 0.9 },
        salmon: { count: 1, weight: 30, cost: 0.9 },
        capers: { count: 1, weight: 30, cost: 0.3 }
      },
      weight: 570,
      cost: 5.6,
      diameter: 35
    },
    tutby: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        bacon: { count: 1, weight: 30, cost: 0.8 },
        tomato: { count: 1, weight: 50, cost: 0.4 },
        "garlic-sauce": { count: 1, weight: 30, cost: 0.2 },
        sausage: { count: 1, weight: 40, cost: 0.4 }
      },
      weight: 570,
      cost: 5,
      diameter: 35
    },
    "four-seasons": {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 1, weight: 30, cost: 0.7 },
        mushroom: { count: 1, weight: 50, cost: 0.4 },
        shrimps: { count: 1, weight: 30, cost: 0.9 },
        mussels: { count: 1, weight: 30, cost: 0.9 }
      },
      weight: 590,
      cost: 6.1,
      diameter: 35
    },
    romans: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        bacon: { count: 1, weight: 30, cost: 0.8 },
        chicken: { count: 1, weight: 30, cost: 0.6 },
        pickels: { count: 1, weight: 50, cost: 0.2 },
        "cheese-sauce": { count: 1, weight: 30, cost: 0.2 }
      },
      weight: 560,
      cost: 4.8,
      diameter: 35
    },
    everyday: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        tomato: { count: 1, weight: 50, cost: 0.4 },
        sausage: { count: 2, weight: 40, cost: 0.4 }
      },
      weight: 580,
      cost: 4.4,
      diameter: 35
    },
    havaii: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 2, weight: 30, cost: 0.7 },
        "marinated-pepper": { count: 0, weight: 30, cost: 0.5 },
        pineapple: { count: 1, weight: 30, cost: 0.3 }
      },
      weight: 570,
      cost: 5.4,
      diameter: 35
    },
    students: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 2, weight: 30, cost: 0.7 },
        "small-sausage": { count: 1, weight: 30, cost: 0.4 }
      },
      weight: 540,
      cost: 4.8,
      diameter: 35
    },
    siciliya: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        chicken: { count: 2, weight: 30, cost: 0.6 },
        mushroom: { count: 1, weight: 50, cost: 0.4 },
        jalapeo: { count: 1, weight: 30, cost: 0.7 },
        "pepperoni-pepper": { count: 1, weight: 30, cost: 0.7 }
      },
      weight: 620,
      cost: 6.2,
      diameter: 35
    },
    goverment: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 1, weight: 30, cost: 0.7 },
        pickels: { count: 1, weight: 50, cost: 0.2 },
        mushroom: { count: 1, weight: 50, cost: 0.4 }
      },
      weight: 580,
      cost: 4.7,
      diameter: 35
    },
    palitra: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        cherry: { count: 1, weight: 30, cost: 0.5 },
        "black-olives": { count: 1, weight: 30, cost: 0.4 },
        "feta-cheese": { count: 2, weight: 30, cost: 0.4 }
      },
      weight: 570,
      cost: 4.9,
      diameter: 35
    },
    naughty: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        chicken: { count: 2, weight: 30, cost: 0.6 },
        pineapple: { count: 1, weight: 30, cost: 0.3 }
      },
      weight: 540,
      cost: 4.7,
      diameter: 35
    },
    greeks: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        "garlic-sauce": { count: 2, weight: 30, cost: 0.2 },
        cherry: { count: 1, weight: 30, cost: 0.5 },
        "feta-cheese": { count: 1, weight: 30, cost: 0.4 },
        spinach: { count: 2, weight: 30, cost: 0.3 }
      },
      weight: 600,
      cost: 4.6,
      diameter: 35
    },
    vezuvii: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        ham: { count: 2, weight: 30, cost: 0.7 }
      },
      weight: 410,
      cost: 4.6,
      diameter: 35
    },
    village: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        bacon: { count: 1, weight: 30, cost: 0.8 },
        pickels: { count: 1, weight: 50, cost: 0.2 },
        onion: { count: 1, weight: 30, cost: 0.2 },
        egg: { count: 1, weight: 80, cost: 0.5 }
      },
      weight: 630,
      cost: 4.9,
      diameter: 35
    },
    mushrooms: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 1, weight: 50, cost: 0.6 },
        mushroom: { count: 2, weight: 50, cost: 0.4 }
      },
      weight: 550,
      cost: 4,
      diameter: 35
    },
    margarita: {
      ingredients: {
        base: { count: 1, weight: 300, cost: 2 },
        "pizza-sause": { count: 1, weight: 100, cost: 0.6 },
        cheese: { count: 2, weight: 50, cost: 0.6 }
      },
      weight: 500,
      cost: 3.8,
      diameter: 35
    }
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default reducer;
