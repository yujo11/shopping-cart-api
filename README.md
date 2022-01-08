<br/>
<br/>
<p align="middle" >
  <img width="200px;" src="./asset/cart.png"/>
</p>
<h2 align="middle">장바구니 API</h2>
<p align="middle">Clean Code React 장바구니 미션 API</p>

## 🌏 baseUrl

```
localhost:3000/api/cart
```

## 🎁 상품

### 상품 목록 조회

| method | uri           |
| ------ | ------------- |
| GET    | /api/products |

```json
{
  "response": [
    {
      "product_id": 1,
      "price": 10000,
      "name": "치킨",
      "image_url": "http://example.com/chicken.jpg"
    },
    {
      "product_id": 2,
      "price": 20000,
      "name": "피자",
      "image_url": "http://example.com/pizza.jpg"
    }
  ]
}
```

### 상품 추가

| method | uri           |
| ------ | ------------- |
| POST   | /api/products |

`POST /api/products`

```json
{
  "requestBody": {
    "price": 10000,
    "name": "치킨",
    "image_url": "http://example.com/chicken.jpg"
  }
}
```

### 상품 단일 조회

| method | uri                        |
| ------ | -------------------------- |
| GET    | /api/products/{product_id} |

```json
{
  "response": {
    "product_id": 1,
    "price": 10000,
    "name": "치킨",
    "image_url": "http://example.com/chicken.jpg"
  }
}
```

### 상품 단일 삭제

| method | uri                        |
| ------ | -------------------------- |
| DELETE | /api/products/{product_id} |

```json
{
  "response": {}
}
```

## 🛒 장바구니

### 장바구니 아이템 목록 조회

| method | uri                                  |
| ------ | ------------------------------------ |
| GET    | /api/customers/{customer_name}/carts |

```json
{
  "response": [
    {
      "product_id": 1,
      "price": 10000,
      "name": "치킨",
      "image_url": "http://example.com/chicken.jpg"
    },
    {
      "product_id": 2,
      "price": 20000,
      "name": "피자",
      "image_url": "http://example.com/pizza.jpg"
    }
  ]
}
```

### 장바구니 아이템 추가

| method | uri                                  |
| ------ | ------------------------------------ |
| POST   | /api/customers/{customer_name}/carts |

```json
{
  "requestBody": {
    "product_id": 1
  }
}
```

### 장바구니 아이템 단일 삭제

| method | uri                                            |
| ------ | ---------------------------------------------- |
| DELETE | /api/customers/{customer_name}/carts/{cart_id} |

```json
{
  "response": {}
}
```

## 🗒 주문

### 주문 추가(주문하기)

| method | uri                                   |
| ------ | ------------------------------------- |
| POST   | /api/customers/{customer_name}/orders |

```json
{
  "requestBody": [
    {
      "cart_id": 1,
      "quantity": 5
    },
    {
      "cart_id": 2,
      "quantity": 3
    }
  ]
}
```

### 주문 목록(내역) 조회

| method | uri                                   |
| ------ | ------------------------------------- |
| GET    | /api/customers/{customer_name}/orders |

```json

{
  "response": [
    {
      "order_id": 1,
      "order_details": [
        {
          "product_id": 1,
          "price": 10000,
          "name": "치킨",
          "image_url": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "product_id": 2,
          "price": 20000,
          "name": "피자",
          "image_url": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    },
    {
      "order_id": 2,
      "order_details": [
        {
          "product_id": 1,
          "price": 10000,
          "name": "치킨",
          "image_url": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "product_id": 2,
          "price": 20000,
          "name": "피자",
          "image_url": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    }
  ]
```

### 주문 단일 조회

| method | uri                                              |
| ------ | ------------------------------------------------ |
| GET    | /api/customers/{customer_name}/orders/{order_id} |

```json
{
  "response": {
    "order_id": 1,
    "order_details": [
      {
        "product_id": 1,
        "price": 10000,
        "name": "치킨",
        "image_url": "http://example.com/chicken.jpg",
        "quantity": 5
      }
    ]
  }
}
```

## ⚖️ License

[MIT licensed](LICENSE)
