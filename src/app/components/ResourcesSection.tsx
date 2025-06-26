import { HorizontalScrollSection } from './HorizontalScrollSection';
import { resourcesData } from '@/app/data/sectionData';

const ResourcesSection = () => {
  return (
    <HorizontalScrollSection
      title="Resources"
      subtitle="Stay updated with the latest trends, technologies, and best practices in IT infrastructure"
      items={resourcesData}
    />
  );
};

export default ResourcesSection; 