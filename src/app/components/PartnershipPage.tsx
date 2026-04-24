import { MedicalTrust } from './MedicalTrust';
import { Services } from './Services';
import { Revenue } from './Revenue';
import { Partners } from './Partners';
import { CTA } from './CTA';

export function PartnershipPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <MedicalTrust />
      <Services />
      <Revenue />
      <Partners />
      <CTA />
    </div>
  );
}
