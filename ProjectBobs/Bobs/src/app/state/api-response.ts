export interface ApiResponse<T> {
  Value: T;
  ValidationResults: {
    Identifiers: any[];
    Messages: ({
      Property?: string;
      Code?: string;
      Message: string;
      MessageType: string;
    })[]
  }
}
