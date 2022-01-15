<br/>
<br/>
<p align="middle" >
  <img width="200px;" src="./asset/cart.png"/>
</p>
<h2 align="middle">장바구니 API</h2>
<p align="middle">Clean Code React 장바구니 미션 API</p>

## 🌏 baseUrl

```
https://clean-code-shopping-cart.herokuapp.com/
```

## 🔗 API 바로가기

- [🎁 상품(products)](https://github.com/yujo11/shopping-cart-nest-api#-%EC%83%81%ED%92%88)
- [🛒 장바구니(carts)](https://github.com/yujo11/shopping-cart-nest-api#-%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88)
- [🗒 주문(orders)](https://github.com/yujo11/shopping-cart-nest-api#-%EC%A3%BC%EB%AC%B8)

## 🎁 상품

### 상품 목록 조회

| method | uri       |
| ------ | --------- |
| GET    | /products |

```json
{
  "response": [
    {
      "productId": 1,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "productId": 2,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    }
  ]
}
```

### 상품 추가

| method | uri       |
| ------ | --------- |
| POST   | /products |

```json
{
  "requestBody": {
    "price": 10000,
    "name": "치킨",
    "imageUrl": "http://example.com/chicken.jpg"
  }
}
```

### 상품 단일 조회

| method | uri                   |
| ------ | --------------------- |
| GET    | /products/{productId} |

```json
{
  "response": {
    "productId": 1,
    "price": 10000,
    "name": "치킨",
    "imageUrl": "http://example.com/chicken.jpg"
  }
}
```

### 상품 단일 삭제

| method | uri                   |
| ------ | --------------------- |
| DELETE | /products/{productId} |

```json
{
  "response": {}
}
```

## 🛒 장바구니

### 장바구니 아이템 목록 조회

| method | uri                       |
| ------ | ------------------------- |
| GET    | /customers/{userId}/carts |

```json
{
  "response": [
    {
      "cartId": 1,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "cartId": 2,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    }
  ]
}
```

### 장바구니 아이템 추가

| method | uri                        |
| ------ | -------------------------- |
| POST   | /customers/{userId}/carts/ |

```json
{
  "requestBody": {
    "productId": 1
  }
}
```

### 장바구니 아이템 단일 삭제

| method | uri                                |
| ------ | ---------------------------------- |
| DELETE | /customers/{userId}/carts/{cartId} |

```json
{
  "response": {}
}
```

## 🗒 주문

### 주문 추가(주문하기)

| method | uri                        |
| ------ | -------------------------- |
| POST   | /customers/{userId}/orders |

```json
{
  "requestBody": [
    {
      "cartId": 1,
      "quantity": 5
    },
    {
      "cartId": 2,
      "quantity": 3
    }
  ]
}
```

### 주문 목록(내역) 조회

| method | uri                        |
| ------ | -------------------------- |
| GET    | /customers/{userId}/orders |

```json

{
  "response": [
    {
      "orderId": 1,
      "orderDetails": [
        {
          "productId": 1,
          "price": 10000,
          "name": "치킨",
          "imageUrl": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "productId": 2,
          "price": 20000,
          "name": "피자",
          "imageUrl": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    },
    {
      "orderId": 2,
      "orderDetails": [
        {
          "productId": 1,
          "price": 10000,
          "name": "치킨",
          "imageUrl": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "productId": 2,
          "price": 20000,
          "name": "피자",
          "imageUrl": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    }
  ]
```

### 주문 단일 조회

| method | uri                                  |
| ------ | ------------------------------------ |
| GET    | /customers/{userId}/orders/{orderId} |

```json
{
  "response": {
    "orderId": 1,
    "orderDetails": [
      {
        "productId": 1,
        "price": 10000,
        "name": "치킨",
        "imageUrl": "http://example.com/chicken.jpg",
        "quantity": 5
      },
      {
        "productId": 2,
        "price": 20000,
        "name": "피자",
        "imageUrl": "http://example.com/pizza.jpg",
        "quantity": 3
      }
    ]
  }
}
```

## ⚖️ License

[MIT licensed](LICENSE)
