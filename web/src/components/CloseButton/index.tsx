import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export const CloseButton: React.FC = () => {
  return (
    <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário">
      <X weight='bold' className='w-4 h-4'></X>
    </Popover.Button>
  );
}