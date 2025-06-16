import { CreateRoomModal, useCreateRoomModal } from './index';

describe('CreateRoomModal', () => {
  test('コンポーネントが正常に定義されている', () => {
    expect(CreateRoomModal).toBeDefined();
    expect(typeof CreateRoomModal).toBe('function');
  });
});

describe('useCreateRoomModal', () => {
  test('関数が正常に定義されている', () => {
    expect(useCreateRoomModal).toBeDefined();
    expect(typeof useCreateRoomModal).toBe('function');
  });
});