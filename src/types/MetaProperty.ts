type MetaProperty =
  | {
      name: string;
      content: any;
      property?: undefined;
    }
  | {
      property: string;
      content: any;
      name?: undefined;
    };

export default MetaProperty;
