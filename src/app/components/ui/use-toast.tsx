"use client"

import * as React from "react"
import { toast as sonnerToast, type ToasterToast } from "sonner"

export type ToastProps = Partial<ToasterToast>

export function toast(props: ToastProps) {
  return sonnerToast(props.title as string, {
    description: props.description,
    duration: props.duration,
    id: props.id || Date.now().toString(),
    ...props
  })
} 