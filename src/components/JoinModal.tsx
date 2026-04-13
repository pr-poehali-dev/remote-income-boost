import { useEffect } from "react";
import Icon from "@/components/ui/icon";

interface JoinModalProps {
  open: boolean;
  onClose: () => void;
  refLink: string;
  tgLink: string;
  vkLink: string;
  phone: string;
}

const JoinModal = ({ open, onClose, refLink, tgLink, vkLink, phone }: JoinModalProps) => {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-200">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
        >
          <Icon name="X" size={16} />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#ef3124]/10 flex items-center justify-center mb-5">
          <Icon name="MessageCircle" size={24} className="text-[#ef3124]" />
        </div>

        <h2 className="text-2xl font-bold font-cormorant mb-2">Сначала напишите мне</h2>
        <p className="text-[#1a1a1a]/60 text-sm leading-relaxed mb-6">
          Перед регистрацией в партнёрской программе — напишите мне. Я расскажу как всё устроено, отвечу на вопросы и помогу сделать первые шаги правильно.
        </p>

        <div className="flex flex-col gap-3 mb-6">
          <a
            href={tgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#1a1a1a] font-medium px-5 py-3.5 rounded-2xl transition-colors"
          >
            <Icon name="Send" size={20} className="text-[#229ED9]" />
            Написать в Telegram
          </a>
          <a
            href={vkLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#4C75A3]/10 hover:bg-[#4C75A3]/20 text-[#1a1a1a] font-medium px-5 py-3.5 rounded-2xl transition-colors"
          >
            <Icon name="Users" size={20} className="text-[#4C75A3]" />
            Написать во ВКонтакте
          </a>
          <a
            href={`tel:+79874160002`}
            className="flex items-center gap-3 bg-black/5 hover:bg-black/10 text-[#1a1a1a] font-medium px-5 py-3.5 rounded-2xl transition-colors"
          >
            <Icon name="Phone" size={20} className="text-[#1a1a1a]/60" />
            {phone}
          </a>
        </div>

        <div className="border-t border-black/8 pt-5">
          <p className="text-xs text-[#1a1a1a]/40 mb-3 text-center">Уже пообщались со мной?</p>
          <a
            href={refLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-black/15 hover:border-[#ef3124]/40 hover:bg-[#ef3124]/5 text-[#1a1a1a]/70 hover:text-[#ef3124] font-medium text-sm px-5 py-3 rounded-2xl transition-all"
          >
            Перейти к регистрации
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default JoinModal;
