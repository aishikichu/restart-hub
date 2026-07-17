import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
        <span>Built with</span>
        <span className="footer__heart">♥</span>
        <span>by</span>
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Image
            src="/images/restart-logo.png"
            alt="Re:START"
            width={90}
            height={30}
            style={{ height: '28px', width: 'auto', filter: 'drop-shadow(0 1px 4px rgba(139, 150, 246, 0.2))' }}
          />
        </span>
        <span>· Redo Life Anew</span>
      </p>
    </footer>
  );
}
