import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getToken } from '../utils/auth';
import { useAuthStore } from '../stores/useAuthStore';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    const sessionToken = getToken();
    if (sessionToken) {
      setToken(sessionToken);
    } else if (!token && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [router, token, setToken]);

  return (
    <div>
      <main>{children}</main>
      <footer>
        <Link href="/search">검색</Link>
        <Link href="/shop">쇼핑</Link>
        <Link href="/favorites">찜</Link>
        <Link href="/orders">주문내역</Link>
        <Link href="/profile">마이페이지</Link>
      </footer>
    </div>
  );
};

export default Layout;
