"use client";

import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Github, Linkedin, Instagram, Twitter, Users } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/addyjaime",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/addyjaime",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/addyjaime.dev",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/addyjaime",
    label: "Twitter",
  },
];

export default function SocialsPopover() {
  return (
    <div className="fixed top-12 right-[85%] z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent border border-primary/30 text-light hover:bg-primary/10 hover:text-primary transition"
          >
            <Users className="mr-2 h-4 w-4" />
            Socials
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-48 p-3 bg-red/90 border border-primary/20 text-light backdrop-blur-xl"
          align="end"
        >
          <div className="space-y-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
