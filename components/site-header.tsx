"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/#persona-nav", label: "目的別の入口" },
  { href: "/#proof", label: "成果" },
  { href: "/#value", label: "開発の軸" },
  { href: "/#motivation", label: "転職軸" },
  { href: "/#picks", label: "記事" },
  { href: "/#projects", label: "個人開発" },
  { href: "/#career", label: "経歴" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="flex flex-col text-left transition-opacity hover:opacity-80 sm:flex-row sm:items-baseline sm:gap-2"
        >
          <span className="font-semibold tracking-tight">
            {siteConfig.displayName}
          </span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            {siteConfig.publicHandle}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              {label}
            </a>
          ))}
          <a
            href={siteConfig.qiitaProfileUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "ml-2")}
          >
            Qiita を開く
          </a>
        </nav>

        <Sheet>
          <SheetTrigger
            aria-label="メニュー"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-sm" }),
              "md:hidden",
            )}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,280px)]">
            <SheetHeader>
              <SheetTitle>ナビゲーション</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <SheetClose
                  key={href}
                  nativeButton={false}
                  render={
                    <a
                      href={href}
                      className={cn(
                        buttonVariants({ variant: "ghost", className: "justify-start" }),
                      )}
                    >
                      {label}
                    </a>
                  }
                />
              ))}
              <SheetClose
                nativeButton={false}
                render={
                  <a
                    href={siteConfig.qiitaProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ className: "justify-start" }))}
                  >
                    Qiita を開く
                  </a>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
