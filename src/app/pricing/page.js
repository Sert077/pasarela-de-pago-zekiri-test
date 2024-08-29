import Header from '../../components/Header';
import PricingTable from '../../components/PricingTable';

export default function PricingPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <PricingTable />
      </main>
    </div>
  );
}
