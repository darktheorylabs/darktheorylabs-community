export class MemoryService {

  async store(
    key: string,
    value: string
  ) {
    return {
      key,
      value
    };
  }

  async retrieve(
    key: string
  ) {
    return {
      key,
      value: "memory value"
    };
  }

}
