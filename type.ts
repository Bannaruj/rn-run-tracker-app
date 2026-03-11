//type.ts จะสร้างtype ขึ้นมาใหมาที่แมปกับข้อมูลในdb

//แมปกับตาราง coffee_shop

export type CoffeeShop = {
  id: string;
  name: string;
  district: string;
  description: string;
  latitude: number;
  longitude: number;
  phone: string;
  image_url: string;
};
