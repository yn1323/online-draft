import { useState, useCallback } from 'react';

/**
 * ユーザー管理フック
 */
export interface User {
  id: string;
  name: string;
  avatar: string;
  status?: 'online' | 'offline' | 'away';
}

export const useUserManagement = (initialUsers: User[] = []) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const addUser = useCallback((user: User) => {
    setUsers(prev => {
      const exists = prev.find(u => u.id === user.id);
      if (exists) {
        return prev.map(u => u.id === user.id ? user : u);
      }
      return [...prev, user];
    });
  }, []);

  const removeUser = useCallback((userId: string) => {
    setUsers(prev => prev.filter(u => u.id !== userId));
    if (selectedUserId === userId) {
      setSelectedUserId(null);
    }
  }, [selectedUserId]);

  const updateUser = useCallback((userId: string, updates: Partial<User>) => {
    setUsers(prev => 
      prev.map(u => 
        u.id === userId ? { ...u, ...updates } : u
      )
    );
  }, []);

  const selectUser = useCallback((userId: string | null) => {
    setSelectedUserId(userId);
  }, []);

  const getUser = useCallback((userId: string) => {
    return users.find(u => u.id === userId);
  }, [users]);

  const getSelectedUser = useCallback(() => {
    return selectedUserId ? getUser(selectedUserId) : null;
  }, [selectedUserId, getUser]);

  return {
    users,
    selectedUserId,
    addUser,
    removeUser,
    updateUser,
    selectUser,
    getUser,
    getSelectedUser,
    setUsers,
  };
};